import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestroComponent } from './components/add-restro/add-restro.component';
import { ListRestroComponent } from './components/list-restro/list-restro.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateRestroComponent } from './components/update-restro/update-restro.component';

const routes: Routes = [
  { component: AddRestroComponent, path: 'add' },
  { component: ListRestroComponent, path: 'list' },
  { component: RegisterComponent, path: 'register' },
  { component: LoginComponent, path: 'login' },
  { component: UpdateRestroComponent, path: 'update/:id' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
