import { RequestsInterceptor } from './requests.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModuleModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:RequestsInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
