import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateProductComponent } from './components/create-product/create-product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-product' },
  { path: 'list-product', component: ListProductComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'edit-product/:id', component: DetailProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
