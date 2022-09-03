import { Component, OnInit } from '@angular/core';
import { ICartProduct, IProduct } from 'src/app/products';
import { ProductsService } from 'src/app/products.service';
import { ActivatedRoute } from '@angular/router'
import { NotifyService } from 'src/app/notify.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct | undefined
  quantity = 1

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private notifyService: NotifyService,
    private cartService: CartService

  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"));
    this.product = this.productsService.getOne(productId);
  }

  addCart() {
    this.notifyService.notify("Produto adicionado ao carrinho")
    const product: ICartProduct = {
      ...this.product!, quantity: this.quantity
    }
    this.cartService.addCart(product)
  }

}
