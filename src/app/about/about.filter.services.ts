import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import{Product} from '../model/filter'

@Injectable()
export class AboutFilterServices {

   private _url = "./../../assets/filter.json";
   
    constructor(private http:Http){}

    GetProduct()
        {
            return this.http.get(this._url)
            .map((pro:Response) => {
            return  pro.json();
            })
        }


    ProductInfo(id:number):Observable<Product>
    {
       return this.http.get(this._url)
               .map((items)=>{
            let AllProduct=items.json();
            let pro=AllProduct.find((data:Product)=>data.id==id);
            return pro;
        });
    }
}