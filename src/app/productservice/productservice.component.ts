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

   getProductsDatas(): Observable<any> {
   return this.httpCli.post( 'http://localhost:8080/api/getAllProducts',
   {headers: new HttpHeaders({'getProducts': 'content-type'})
   });
  }

  ngOnInit() {
  }

}
