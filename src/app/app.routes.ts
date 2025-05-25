import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { UsComponent } from './components/us/us.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { MyCountComponent } from './components/my-count/my-count.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { AddressComponent } from './components/address/address.component';
import { ProductComponent } from './components/product/product.component';


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
        path: "cart",
        component: ShoppingCartComponent,
        title:"Shopping Cart"
    },
    {
        path:"admin",
        component: AdminHomeComponent,
        title:"Administrator"
    },
    {
        path:"inventory",
        component: InventoryComponent,
        title:"Administrator"
    },
    {
        path:"mycount/:id_customer",
        component: MyCountComponent,
        title:"My Account"
    },
    {
        path:"accountdetail/:id_customer",
        component: AccountDetailComponent,
        title:"Detail Account"
    },
    {
        path:"purchases",
        component: PurchasesComponent,
        title:"Purchases"
    },
    {
        path:"address/:id_customer",
        component: AddressComponent,
        title:"Address"
    },
    {
        path:"product",
        component: ProductComponent,
        title:"Product"
    },
    {
        path:"product/:id_product",
        component: ProductComponent,
        title:"Product"
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
