
import {Component,OnInit} from '@angular/core';
import {UserForm} from '../shared/user';
import { UserServices} from './regx.services';
import { Validators,FormBuilder,FormGroup} from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm:FormGroup;
  constructor(private _fb:FormBuilder){}
ngOnInit(){
this.userForm = this._fb.group({
  'username':['',[Validators.required,Validators.minLength,UserServices.Username]],
  'password':['',[Validators.required,Validators.minLength,UserServices.Password]],
  'email':['',[Validators.required,UserServices.Email]]
}




)


}

}
