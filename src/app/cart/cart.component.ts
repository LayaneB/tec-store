import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ICartProduct } from '../products';
import { Router } from '@angular/router'
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: ICartProduct[] = []
  totalPrice = 0

  constructor(
    public cartService: CartService,
    private route: Router,
    private notifyService: NotifyService
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems()
    this.checkTotalPrice()
  }

  deleteProductCart(productId: number) {
    this.cartItems = this.cartItems.filter(product => product.id !== productId)
    this.cartService.deleteItem(productId)
    this.checkTotalPrice()
  }

  checkTotalPrice() {
    this.totalPrice = this.cartItems.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
  }

  buy() {
    this.notifyService.notify("Compra realizada com sucesso.")
    this.cartService.clearCart()
    this.route.navigate(['produtos'])
  }
}
