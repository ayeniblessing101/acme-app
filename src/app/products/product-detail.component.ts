import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productTitle = 'Product Detail';
  product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
