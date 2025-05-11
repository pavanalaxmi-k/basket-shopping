import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { OfferType } from '../Enums/enum';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call calculateTotalPrice', ()=> {
    const productList = [
        { id: 1, name: 'Apple', price: 35, quantity: 1, offerType: OfferType.None },
        { id: 2, name: 'Banana', price: 20, quantity: 0, offerType: OfferType.None },
        { id: 3, name: 'Melons', price: 50, quantity: 2, offerType: OfferType.BuyOneGetOne },
        { id: 4, name: 'Limes', price: 15, quantity: 0, offerType: OfferType.BuyTwoGetOne},
      ]
      service.calculateTotalPrice(productList);
      expect(service.totalPrice()).toBe(85);
      expect(service.cartList().length).toBe(2);
      expect(service.cartList()[1].individualTotalPrice).toBe(50);
      expect(service.totalQuantity()).toBe(3);
  })

  it('should call getDiscountedPrice, when no discount applied', ()=> {
    const product = { id: 1, name: 'Apple', price: 35, quantity: 1, offerType: OfferType.None }
    const discountedPrice = service.getDiscountedPrice(product);
    expect(discountedPrice).toBe(35);
  })

  it('should call getDiscountedPrice, when buy one get one applied', ()=> {
    const product = { id: 1, name: 'Melons', price: 50, quantity: 2, offerType: OfferType.BuyOneGetOne }
    const discountedPrice = service.getDiscountedPrice(product);
    expect(discountedPrice).toBe(50);
  })

  it('should call getDiscountedPrice, when three for the price of two applied', ()=> {
    const product = { id: 1, name: 'Limes', price: 15, quantity: 3, offerType: OfferType.BuyTwoGetOne }
    const discountedPrice = service.getDiscountedPrice(product);
    expect(discountedPrice).toBe(30);
  })

  it('should call addToCart, when product is not available in the cart', ()=> {
    const product = { id: 1, name: 'Limes', price: 15, quantity: 1, offerType: OfferType.BuyTwoGetOne };
    service.addToCart(product);
    expect(service.cartList().length).toBe(1);
    expect(service.totalPrice()).toBe(15)
  })

  it('should call addToCart, when product is available in the cart', ()=> {
    const product = { id: 1, name: 'Limes', price: 15, quantity: 1, offerType: OfferType.BuyTwoGetOne };
    service.cartList.set([product])
    service.addToCart(product);
    expect(service.cartList().length).toBe(1);
    expect(service.totalPrice()).toBe(30);
    expect(service.cartList()[0].quantity).toBe(2);
  })

});
