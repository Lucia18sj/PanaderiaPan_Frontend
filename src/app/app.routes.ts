import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { UsComponent } from './components/us/us.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent,
        title:"Panadería de Pan"
    },
    {
        path:"products/:category",
        component: ProductsComponent,
        title:"Products"
    },
    {
        path:"us",
        component: UsComponent,
        title:"Us"
    },
    {
        path:"contact",
        component: ContactComponent,
        title:"Contact"
    },
    {
        path:"login",
        component: LoginComponent,
        title:"Login"
    },
    {
        path:"register",
        component:RegisterComponent,
        title:"Register"
    }
];
