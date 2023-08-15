import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './pages/show/show.component';
import { CreateComponent } from './pages/create/create.component';
import { EditarComponent } from './pages/editar/editar.component';

const routes: Routes = [
    { path: '', component: ShowComponent },
    { path: 'create', component: CreateComponent },
    { path: 'update/:id', component: EditarComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
