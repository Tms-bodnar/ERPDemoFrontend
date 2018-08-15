
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ProductserviceComponent } from './productservice/productservice.component';
import { ProductsadminComponent } from './productsadmin/productsadmin.component';
import { ReactiveFormsModule } from '@angular/forms';



const appRoutes: Routes = [
  {path: 'products', component: ProductsComponent} ,
  {path: 'productsAdmin', component: ProductsadminComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductserviceComponent,
    ProductsadminComponent,
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    ),
    ReactiveFormsModule
  ],
  providers: [ProductserviceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
