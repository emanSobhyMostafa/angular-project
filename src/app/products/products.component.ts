import { ObserveService } from './../observe.service';
import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
productList:any
countChang:number
  constructor(private productData:SharedService,private addCart:ObserveService ) { 
    this.productData.getProduct().subscribe(data => {this.productList=data});

this.addCart.getCount().subscribe(data=>this.countChang=data)
    
  }

  ngOnInit(): void {
  }
  add(){
    this.addCart.addCount()
      }
}
