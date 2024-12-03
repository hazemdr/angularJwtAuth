import { Routes } from '@angular/router';
import { HomeComponent } from './composents/home/home.component';
import { LoginComponent } from './composents/login/login.component';
import { SignupComponent } from './composents/signup/signup.component';
import { NotfoundComponent } from './composents/notfound/notfound.component';
import { ListComponent } from './composents/home/list/list.component';
import { AjoutComponent } from './composents/home/ajout/ajout.component';
import { UpdateComponent } from './composents/home/update/update.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
    {path:"" ,  redirectTo:"home" , pathMatch:'full'},
    {path:"home", canActivate: [authGuard] ,   component:HomeComponent , children:[
        {path:'', redirectTo:'list' , pathMatch:'full'},
        {path:'list' , component:ListComponent}, 
        {path:'ajout', component:AjoutComponent},
        {path:'update/:id' , component:UpdateComponent},
        
    ]},
    {path:"login" , component:LoginComponent},
    {path:"signup" , component:SignupComponent},
    {path:"**" , component:NotfoundComponent},
];
