import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './auth-module/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path:'profile',component:RegisterComponent
  },
  {
    path:'products',  component:ProductsComponent
  },
  {
    path:'products/product-details',component:ProductDetailComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
