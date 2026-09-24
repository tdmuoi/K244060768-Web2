import { Component } from '@angular/core';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-catalog',
  standalone: false,
  styleUrl: './catalog.css',
  templateUrl: './catalog.html',
})
export class Catalog {
  public categories: any;

  constructor(service: CatalogService) {
    this.categories = service.getCategories();
  }
}
