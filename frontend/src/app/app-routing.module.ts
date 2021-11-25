import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderComponent } from './admin/list-order/list-order.component';
import { ListPizzaComponent } from './admin/list-pizza/list-pizza.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { RegisterPizzaComponent } from './admin/register-pizza/register-pizza.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { UpdatePizzaComponent } from './admin/update-pizza/update-pizza.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { RegisterOrderComponent } from './user/register-order/register-order.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'registerUser',
    component: RegisterUserComponent
  },
  {
    path: 'registerRole',
    component: RegisterRoleComponent
  },
  {
    path: 'registerPizza',
    component: RegisterPizzaComponent
  },
  {
    path: 'registerOrder',
    component: RegisterOrderComponent
  },
  {
    path: 'listUser',
    component: ListUserComponent
  },
  {
    path: 'listRole',
    component: ListRoleComponent
  },
  {
    path: 'listPizza',
    component: ListPizzaComponent
  },
  {
    path: 'listOrder',
    component: ListOrderComponent
  },
  {
    path: 'updatePizza',
    component: UpdatePizzaComponent
  },
  {
    path: 'updateRole',
    component: UpdateRoleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
