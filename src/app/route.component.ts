import{Component,OnInit} from '@angular/core'
import {ActivatedRoute,Params} from '@angular/router';
import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import{SearchProduct,Product} from './model/filter'
import{AboutFilterServices} from './about/about.filter.services'

@Injectable()
@Component({
    selector:'route',
    template:`
    <div class="panel" *ngIf= "model">
    <div class="panel-head">
    <h2>{{model.name}}</h2>
    </div>
    <div class="panel-body">
    <img class="img-responsive" [src]="model.image" > 
    </div>
    <div class="panel-foot">
    {{model.code}},
    {{model.avl}} ,
    <b>{{model.price}}Rs.</b> ,
     <h4>Rating:{{model.rating}}</h4>
    </div>
    </div>
    
    `,
    styles:[
        `
        div.panel{
            height:550px;
            width:550px;
        }
        `
    ]
})

export class RouteComponents implements OnInit{
    data;
    model = new SearchProduct();
    
constructor(private _router:ActivatedRoute,public _serve:AboutFilterServices) { }
ngOnInit() {

  this._router.params
  .subscribe((params) => {
      let productId= params['id'];
      this._serve.ProductInfo(productId).subscribe((my)=>{
          this.model=my;
      })
  })
}
}