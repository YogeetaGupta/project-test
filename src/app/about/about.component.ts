import { Component, OnInit } from '@angular/core';
import { AboutFilterServices } from './about.filter.services';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  products:any[];
  rashan:any[];
  isActive:boolean=false;
 filter:string = "";

  constructor(public _aboutFilterServices:AboutFilterServices) { }
  content;
  ngOnInit() {
    this._aboutFilterServices.GetProduct()
    .subscribe((rashan) => {
       this.products = rashan;
      console.log(this.products)
    }); 
  }
  toggel()
  {
    this.isActive=!this.isActive;
  }
  
  
  
}
