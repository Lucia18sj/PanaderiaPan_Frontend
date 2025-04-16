import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { UsComponent } from './components/us/us.component';
import { ContactComponent } from './components/contact/contact.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { count } from 'rxjs';
import { MyCountComponent } from './components/my-count/my-count.component';

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
        path:"detail-account",
        component: AccountDetailComponent,
        title:"Detail Account"
    },
    {
        path:"account",
        component: MyCountComponent,
        title:"Account"
    }
    
];
