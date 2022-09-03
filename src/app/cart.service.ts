import { Injectable } from '@angular/core';
import { ICartProduct } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ICartProduct[] =[]
  constructor() { }

  getItems (){
    return JSON.parse(localStorage.getItem("cart") || "")
  }

  addCart(product: ICartProduct){
    this.items.push(product)
    localStorage.setItem("cart",JSON.stringify( this.items))
  }

  clearCart(){
    this.items = []
    localStorage.clear()
  }
}
