import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  datas = [
    {
      "CateId": "cate1", "CateName": "nuoc ngot",
      "Products": [
        {"ProductId": "p1", "ProductName": "Coca",  "Price": 100, "Image": "assets/h1-cocahong.jpg"},
        {"ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "assets/h2-pepsichanh.jpg"},
        {"ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "assets/h3-stingdo.webp"},
      ]
    },
    {
      "CateId": "cate2", "CateName": "Bia",
      "Products": [
        {"ProductId": "p4", "ProductName": "Heleiken", "Price": 500, "Image": "assets/h1-heineken.jpg"},
        {"ProductId": "p5", "ProductName": "333",      "Price": 400, "Image": "assets/h3-tiger.jpg"},
        {"ProductId": "p6", "ProductName": "Sai Gon",  "Price": 600, "Image": "assets/h2-biasaigon.jpg"},
      ]
    },
  ]

  constructor() { }

  getCategories() {
    return this.datas;
  }
}
