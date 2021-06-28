import { ObserveService } from './../observe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
addProduct:number
  constructor(private sellCount:ObserveService) { }

  ngOnInit(): void {
    this.sellCount.getCount().subscribe(data=>this.addProduct=data)
  }

}
