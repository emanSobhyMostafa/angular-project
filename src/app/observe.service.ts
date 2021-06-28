import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserveService {
  count:number=0

  private cart=new BehaviorSubject(0)
  constructor() { }


  addCount(){
    this.count++
    this.cart.next(this.count)
      }

  removeCount(){
       if(this.count>0){ this.count--
      }
      this.cart.next(this.count)
      }
      getCount(){
      return  this.cart
      }
}
