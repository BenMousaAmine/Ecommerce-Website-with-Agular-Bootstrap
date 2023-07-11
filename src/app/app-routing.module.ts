import { NgModule } from '@angular/core';
import {ActivatedRoute, RouterModule, Routes} from '@angular/router'
import {CheckoutComponent} from './checkout/checkout.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ProductComponent} from './product/product.component';
import {ProductsComponent} from './products/products.component';
import {ProfileComponent} from './profile/profile.component';
import {myCanActivate} from "./auth-guard.service";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'login', component: LoginComponent},
  { path: 'products/:id', component: ProductComponent },
  { path: 'product', component: ProductComponent },
  {path:'products', component: ProductsComponent},
  {path:'profile', component: ProfileComponent ,canActivate:[myCanActivate] },

]





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
