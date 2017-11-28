
import { QnaServices } from './qna.services';
import { Component,OnInit } from '@angular/core';



@Component({
 selector:'qna',
 template:`
 
 <ul *ngFor="let ans of qna">
 
 <li>
 {{ans.question}} 
 </li>
 <li (click)="result='a'">
 <input type="radio" name="result">
 {{ans.ansA}} 
 </li>
 <li (click)="result='b'">
 <input type="radio" name="result">
 {{ans.ansB}}
 </li>
 <li (click)="result='c'">
 <input type="radio" name="result">
 {{ans.ansC}}
 </li>
 
 </ul>
 <div class="result"  [ngSwitch]="result">
 <h4 *ngSwitchCase = "'a'">User Has Selected A</h4>
 <h4 *ngSwitchCase = "'b'">User Has Selected B</h4>
 <h4 *ngSwitchCase = "'c'">User Has Selected C</h4>

 </div>

 `, 
 styles:[
     `
     ul{color:white; list-style-type:none;}
     div.result{height:40px;width:300px;border:2px solid white;color:grey}
     `
 ]
})



export class QnaComponent implements OnInit {

  
   qna:any[];
   isSelected:boolean=true;
   result:any='a';

   constructor(private _qnaServices:QnaServices){}

   ngOnInit(){

 this._qnaServices.GetAlbums()
 .subscribe((ans) => {
    this.qna = ans;
    
 });

}





}