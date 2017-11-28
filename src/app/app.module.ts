import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignComponent } from './sign/sign.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavigationComponent } from './navigation/navigation.component';
import { routes } from './apps.routes';
import {ProjService} from './proj.services'
import { UserServices } from './register/regx.services';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {UserForm} from './shared/user'
import { QnaComponent } from './qna.component';
import { QnaServices } from './qna.services';
import { AboutFilterServices } from './about/about.filter.services';
import { FilterPipe } from './about/filter.pipes';
import { RatingComponent } from './about/rating.component';
import {RouteComponents} from './route.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    HomeComponent,
    AboutComponent,
    SignComponent,
    RegisterComponent,
    ServicesComponent,
    ContactUsComponent,
    NavigationComponent,
    QnaComponent,
    FilterPipe,
    RouteComponents
  ],
  imports: [
    BrowserModule,RouterModule,routes, FormsModule,
    ReactiveFormsModule,HttpModule

  ],
  providers: [ProjService,UserServices,QnaServices,AboutFilterServices],
  bootstrap: [AppComponent]
})
export class AppModule { } 
