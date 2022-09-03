import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products';
import { ProductsService } from 'src/app/products.service';
import { ActivatedRoute } from '@angular/router'

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
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"));
    this.product = this.productsService.getOne(productId);
  }

}
