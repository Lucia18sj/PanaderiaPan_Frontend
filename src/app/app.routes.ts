import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { UsComponent } from './components/us/us.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { MyCountComponent } from './components/my-count/my-count.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { AddressComponent } from './components/address/address.component';
import { OneProductComponent } from './components/one-product/one-product.component';

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
        path:"mycount",
        component: MyCountComponent,
        title:"My Account"
    },
    {
        path:"accountdetail",
        component: AccountDetailComponent,
        title:"Detail Account"
    },
    {
        path:"purchases",
        component: PurchasesComponent,
        title:"Purchases"
    },
    {
        path:"address",
        component: AddressComponent,
        title:"Address"
    }
];
