import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  public getProduct(){
     return this.http.get('https://fakestoreapi.com/products')
  }public getsingleProduct(id:number){
     return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
 
}
