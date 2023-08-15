import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './pages/show/show.component';
import { CreateComponent } from './pages/create/create.component';
import { EditarComponent } from './pages/editar/editar.component';
import { GenericFormComponent } from './components/generic-form/generic-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        ShowComponent,
        CreateComponent,
        EditarComponent,
        GenericFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule
        , HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
