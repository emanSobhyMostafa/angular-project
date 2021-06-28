import { ObserveService } from './../observe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productList:Array<any>
  product:any
  productId:number
  removeFromcart:number
  constructor(private productData:SharedService ,private route:ActivatedRoute,private removed:ObserveService) { 
  this.route.queryParams.subscribe(data=>this.productId = +data.id)
this.productData.getsingleProduct(this.productId).subscribe(data=>this.product=data)


this.removed.getCount().subscribe(data=>{console.log(data);this.removeFromcart=data})

  }

  ngOnInit(): void {

  }
  remove(){
this.removed.removeCount()
  }
}
