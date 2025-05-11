import { Injectable, signal } from '@angular/core';
import { OfferType } from '../Enums/enum';

export interface cartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  offerType: string;
  individualTotalPrice?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  totalPrice = signal(0);
  cartList = signal<cartItem[]>([]);
  totalQuantity = signal(0);

  //Calculate total price of the cart
  calculateTotalPrice(productList: cartItem[]) {
    this.totalPrice.set(0);
    this.totalQuantity.set(0);
    productList.forEach((product) => {
      product.individualTotalPrice = this.getDiscountedPrice(product);
      this.totalQuantity.update((prev) => prev + product.quantity);
      this.totalPrice.update((prev) => prev + (product.individualTotalPrice ? product.individualTotalPrice : this.getDiscountedPrice(product)));
    });
  }

  // Calculate the discounted price based on the offer type
  getDiscountedPrice(product: cartItem) {
    let discount;
    switch (product.offerType) {
      case OfferType.BuyOneGetOne:
        discount = Math.floor(product.quantity / 2);
        break;
      case OfferType.BuyTwoGetOne:
        discount = Math.floor(product.quantity / 3);
        break;
      default:
        discount = 0;
    }
    return product.price * (product.quantity - discount);
  }

  //return the cart list and total price
  getCartList() {
    return this.cartList();
  }

  //return the total price
  getTotalPrice() {
    return this.totalPrice();
  }

  getTotalQuantity() {
    return this.totalQuantity();
  }

  //Add item to the cart, if the item is already in the cart, increase the quantity
  addToCart(product: cartItem) {
    const existingCartItem = this.cartList().find((item) => item.id == product.id)
    if (existingCartItem) {
      existingCartItem.quantity += 1;
      this.cartList.update((prev) => [...prev])
    } else {
      product.quantity = 1;
      this.cartList.update((prev) => [...prev, product]);
    }
    this.calculateTotalPrice(this.cartList());
  }

}
