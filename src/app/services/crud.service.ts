import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {

    constructor(private httpClient: HttpClient) { }

}
@Injectable({
    providedIn: 'root'
})
export class CrudService {

    //URL del backend

    private REST_API: string = 'http://localhost:8000/api/products';

    // Http Header  

    httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private httpClient: HttpClient) { }

    //Traer todos los productos

    getAllProducts() {
        return this.httpClient.get(`${this.REST_API}`, { headers: this.httpHeaders });
    }

    //Traer 1 producto si no existe devuelve un objeto vacio

    getProduct(id: any) {
        return this.httpClient.get(`${this.REST_API}/${id}`, { headers: this.httpHeaders })
            .pipe(map((res: any) => {
                return res || {}
            })
            )
    }

    //Crear un producto

    createProduct(data: Product) {
        return this.httpClient.post(this.REST_API, data, { headers: this.httpHeaders })
    }

    //Actualizar un producto

    updateProduct(id: any, data: Product) {

        return this.httpClient.put(`${this.REST_API}/${id}`, data, { headers: this.httpHeaders }).pipe(catchError(this.handleError))
    }

    //Eliminar un producto

    deleteProduct(id: any) {

        return this.httpClient.delete(`${this.REST_API}/${id}`, { headers: this.httpHeaders }).pipe(catchError(this.handleError))
    }

    //Manejo de errores

    handleError(error: HttpErrorResponse) {

        let errorMessage: string = '';
        //instanceof es un operador que verifica si un objeto es de un tipo de dato especifico
        if (error.error instanceof ErrorEvent) {
            // Manejo de errores del lado del cliente
            errorMessage = error.error.message;
        } else {
            // Manejo de errores del lado del servidor
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(() => {
            return errorMessage;
        });
    }

}
