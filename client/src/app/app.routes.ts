import { Routes } from '@angular/router';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'sign-in',pathMatch:'full'
    },
    {
        path: 'sign-in',
        component:SignInComponent
    },
    {
        path: 'sign-up',
        component:SignUpComponent
    }
];
