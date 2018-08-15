import { Product } from '../products/product';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-productservice',
  templateUrl: './productservice.component.html',
  styleUrls: ['./productservice.component.css']
})
export class ProductserviceComponent implements OnInit {

   constructor( private httpCli: HttpClient) {}

   getAllProductsDatas(): Observable<any> {
   return this.httpCli.post( 'http://localhost:8080/api/getAllProducts',
   {headers: new HttpHeaders({'Content-Type': 'application/json'})
   });
  }

  deleteProduct(id: string): Observable <any> {
    return this.httpCli.delete(
     'http://localhost:8080/api/deleteProduct',
       {headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Contoll-Allow-Origin': '*'}),
         params: new HttpParams().set('id', id)
       });
  }
  updateProduct(name: string, id: string): Observable <any> {
    return this.httpCli.patch(
    'http://localhost:8080/api/updateProduct',
      {headers: new HttpHeaders({
      'Content-Type': 'application/json',
        'Access-Controll-Allow-Origin': '*'}),
      params: new HttpParams().set('name', name).append('id', id)
      });
  }
  addProduct(name: string): Observable <any> {
//    console.log('prod21 : ' + name);
//    const params = new HttpParams().set('name', name);
//    console.log('prod123 ' + params.get('name'));
    return this.httpCli.post(
       'http://localhost:8080/api/addProduct',
        name,
      {headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Contoll-Allow-Origin': '*'}),
       });
  }

  ngOnInit() {
  }

}
