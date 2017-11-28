import { Component, OnInit ,Input} from '@angular/core';
import {ProjService} from '../proj.services'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
service:any[];
pic;
  constructor(public _pro:ProjService,public _Photo:ProjService) {  
  }
   islike:boolean=true;
   totallikes:number=100;
  isEnable = false;
  
  ULikes()
  {
      this.islike=!this.islike;
      this.totallikes += this.islike ? 1 : -1;
  }


  ngOnInit() {
    this.service=this._pro.Projservices();
    this.pic=this._Photo.projimage();
    
    
  }
  toggle()
  {
     this.isEnable = !this.isEnable;
  }
  
  

}
