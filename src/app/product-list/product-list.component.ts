import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { cartItem, ProductService } from '../../Shared/Services/product.service';
import { OfferType } from '../../Shared/Enums/enum';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-list',
  imports: [RouterModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  productList = [
    { id: 1, name: 'Apple', price: 35, quantity: 0, offerType: OfferType.None },
    { id: 2, name: 'Banana', price: 20, quantity: 0, offerType: OfferType.None },
    { id: 3, name: 'Melons', price: 50, quantity: 0, offerType: OfferType.BuyOneGetOne },
    { id: 4, name: 'Limes', price: 15, quantity: 0, offerType: OfferType.BuyTwoGetOne},
  ]

  $productService = inject(ProductService);
  cartList:cartItem[];

  addToCart(product: any) {
    this.$productService.addToCart(product)
   this.getUpdatedQuantity();
  }

  constructor() {
     this.cartList= this.$productService.cartList();
     this.getUpdatedQuantity();
  }

  getUpdatedQuantity() {
    this.productList.forEach((product) => {
      const cartItem = this.cartList.find((item) => item.id === product.id);
      if (cartItem) {
        product.quantity = cartItem.quantity;
      }
    });
  }
}
