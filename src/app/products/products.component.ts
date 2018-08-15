import { ProductserviceComponent } from '../productservice/productservice.component';
import { Product } from './product';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Iterator } from 'typescript';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

   products: Array<Product>;
   product: Product;


  constructor( private productSevice: ProductserviceComponent) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productSevice.getAllProductsDatas().subscribe(data => {
  this.products = data;
  });
  }

  getProduct(id: string) {
  for ( const prod of this.products) {
    if (prod.id === id) {
      this.product = prod;
   }
  }
    console.log(this.product.name);
    return this.product;
  }

  updateProduct(id: string) {
    this.getProduct(id);
  }

  deleteProduct(id: string) {
  this.productSevice.deleteProduct(id).subscribe(
    res => console.log(res));
  }
}
