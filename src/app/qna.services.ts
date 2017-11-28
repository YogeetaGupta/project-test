import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class QnaServices {

   private _url = "./../assets/qna.json";
   
constructor(private http:Http){}

GetAlbums()
{
return this.http.get(this._url)
.map((res:Response) => {
 return  res.json();
})
}






}