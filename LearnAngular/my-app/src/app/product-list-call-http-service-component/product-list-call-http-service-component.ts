import { Component, signal } from '@angular/core';
import { Product } from '../classes/iProduct';
import { ProductHttpService } from '../services/product-http-service';

@Component({
  selector: 'app-product-list-call-http-service-component',
  standalone: false,
  styleUrl: './product-list-call-http-service-component.css',
  templateUrl: './product-list-call-http-service-component.html',
})
export class ProductListCallHttpServiceComponent {
  products = signal<Product[]>([]);
  minPrice: number = 0;
  maxPrice: number = 1000;

  constructor(private _service: ProductHttpService) { }

  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: (data) => {
        this.products.set(data);
      },
      error: (err) => {
        alert('Lỗi: ' + JSON.stringify(err));
      }
    });
  }

  doFilter(): void {
    this._service.getProductList().subscribe({
      next: (data: Product[]) => {
        this.products.set(
          data.filter(p => p.price >= this.minPrice && p.price <= this.maxPrice)
        );
      },
      error: (err: any) => {
        alert('Lỗi: ' + JSON.stringify(err));
      }
    });
  }
}