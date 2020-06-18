import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ProductsEditComponent } from './products-edit/products-edit.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent, canActivate: [AuthGuard] },
  { path: ':id', component: ProductsEditComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [ProductsListComponent, ProductsDetailsComponent, ProductsEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
