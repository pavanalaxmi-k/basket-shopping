import { Component, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../Shared/Services/product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatGridListModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';

  $router: Router = inject(Router);
  $productService = inject(ProductService);

  totalQuantity = 0;

  constructor() {
    effect(()=> {
      this.totalQuantity = this.$productService.getTotalQuantity();
    })
  }

  showCart() {
    this.$router.navigate(['/cart']);
  }
}
