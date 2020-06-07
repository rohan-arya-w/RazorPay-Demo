import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productDetails=[];
  pruduct_url='https://5ed162594e6d7200163a0830.mockapi.io/rvsp/products';
  constructor(private http:HttpClient) { }
  Product_page(){
    return this.http.get(this.pruduct_url)

  }
}
