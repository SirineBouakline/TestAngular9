import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FormProductComponent} from './form-product/form-product.component';
import {TodolistComponent} from './todolist/todolist.component';

const ROUTES: Routes = [
  {path: 'products', component: HomeComponent},
  {path: 'Todos', component: TodolistComponent},
  {path: 'addProduct', component: FormProductComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
