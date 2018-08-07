import { ProductserviceComponent } from '../productservice/productservice.component';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<any>;

  constructor( private productSevice: ProductserviceComponent) {}

  ngOnInit() {
  this.productSevice.getProductsDatas().subscribe(data => {
  this.products = data;
  });
  }

}
