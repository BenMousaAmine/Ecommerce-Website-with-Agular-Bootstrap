import { Component } from '@angular/core';
import { Product } from '../models'
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ProductsServiceService} from "../products-service.service";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  private intervalSubscription?:Subscription
  productsRoot?: Product[];
  loading  = false
  private productId?: string;


  constructor(protected prodService : ProductsServiceService,
              private route: ActivatedRoute,
              private router:Router
    )
  {
    // prendere dati da porducts Sevice
    this.intervalSubscription=this.prodService.observable.subscribe({
      next:prodotti =>{
        this.productsRoot= prodotti
      }})

  }
  //navigazione dinamica
  goToDetails(id:number){
    this.router.navigate(["/products",id])
  }
  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
  }
addToCart(id:number){
const title = this.productsRoot?.[id]?.title
  const price = this.productsRoot?.[id]?.price
  const nvID = Date.now()
  console.log(nvID)
  // @ts-ignore
  this.prodService.cart=[... this.prodService.cart,{id:nvID  , title:title , price:price}]
  console.log( this.prodService.cart)
}

}

