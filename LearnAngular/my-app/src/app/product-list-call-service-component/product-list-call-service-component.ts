import { Component } from '@angular/core';
import { iProduct } from '../classes/iProduct';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-list-call-service-component',
  standalone: false,
  styleUrl: './product-list-call-service-component.css',
  templateUrl: './product-list-call-service-component.html',
})
export class ProductListCallServiceComponent {
  products:iProduct[]=[]
  minPrice:number=0;
  maxPrice:number=1000;
  constructor(private ps:ProductService)
  {
    //this.products=this.ps.getProductList(); ít người dùng
  }
  ngOnInit():void
  {
    this.products = this.ps.getProductList();
  }
  doFilter()
  {
    this.products = this.ps.getProductList().filter(p => p.price >= this.minPrice && p.price <= this.maxPrice);
  }
}