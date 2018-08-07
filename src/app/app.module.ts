
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';



import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ProductserviceComponent } from './productservice/productservice.component';

const appRoutes: Routes = [
  {path: 'products', component: ProductsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductserviceComponent,
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    )
  ],
  providers: [ProductserviceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
