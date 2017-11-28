import {RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ServicesComponent} from "./services/services.component";
import {SignComponent} from "./sign/sign.component";
import {RegisterComponent} from "./register/register.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {AboutComponent} from "./about/about.component";
import {RouteComponents} from './route.component';


export const routes = RouterModule.forRoot(
    [
        {
            path:'home',
            component:HomeComponent           
        },
        {
            path:'about',
            component:AboutComponent           
        },
        {
            path:'services',
            component:ServicesComponent           
        },
        {
            path:'contact',
            component:ContactUsComponent           
        },
        {
            path:'sign',
            component:SignComponent           
        },
        {
            path:'register',
            component:RegisterComponent           
        },
        {
            path:'product/:id',
            component:RouteComponents
        }
    ]
)



