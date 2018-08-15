import { Product } from '../products/product';
import { ProductserviceComponent } from '../productservice/productservice.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-productsadmincomponent',
  templateUrl: './productsadmin.component.html',
  styleUrls: ['./productsadmin.component.css']
})
export class ProductsadminComponent implements OnInit {

  product: Product;
  productsAdminForm = this.fb.group({
  name: ['' , Validators.required, ]
  });
  nameFromForm: string;


  constructor(private productService: ProductserviceComponent, private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  productAdmin() {
    this.nameFromForm = this.productsAdminForm.value.name;
     console.log('prod2_: ' + this.nameFromForm);
    this.productService.addProduct(this.nameFromForm).subscribe(
    res => console.log(res));
   }
  }
