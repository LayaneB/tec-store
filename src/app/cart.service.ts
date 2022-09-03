import { Injectable } from '@angular/core';
import { ICartProduct } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ICartProduct[] =[]
  constructor() { }

  getItems (){
    this.items = JSON.parse(localStorage.getItem("cart") || "[]")
    return this.items
  }

  addCart(product: ICartProduct){
    this.items.push(product)
    localStorage.setItem("cart",JSON.stringify( this.items))
  }

  clearCart(){
    this.items = []
    localStorage.clear()
  }
  
  deleteItem(productId: number){
    this.items = this.items.filter(item => item.id !== productId)
    localStorage.setItem("cart",JSON.stringify( this.items))
  }
}