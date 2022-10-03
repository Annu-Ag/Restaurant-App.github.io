import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestroComponent } from './components/add-restro/add-restro.component';
import { UpdateRestroComponent } from './components/update-restro/update-restro.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ListRestroComponent } from './components/list-restro/list-restro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddRestroComponent,
    UpdateRestroComponent,
    RegisterComponent,
    LoginComponent,
    ListRestroComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
