import { Component, effect, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { cartItem, ProductService } from '../../Shared/Services/product.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  imports: [RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  $router: Router = inject(Router);
  $productService = inject(ProductService);
  
  totalPrice = 0;
  cartList: cartItem[] = [];

  constructor() {
    effect(()=> { 
      this.totalPrice = this.$productService.getTotalPrice();
      this.cartList = this.$productService.getCartList();
     });
  }

  continueShopping() {
    this.$router.navigate(['/product']);
  }

}
