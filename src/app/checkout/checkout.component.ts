import {Component, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {ProductsServiceService} from "../products-service.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  public cart: { id: number; title: string; price: number; }[]
  constructor(public prodService : ProductsServiceService) {

    this.cart = this.prodService.cart.filter(element => element.id !== 0);
  }
  total() {
    let somma = 0;
    this.cart.forEach((item) => {
      somma += item.price;
    });
    return somma;
  }
elimina(id:number){
    this.cart=this.cart.filter(element => element.id!== id)
}
}
