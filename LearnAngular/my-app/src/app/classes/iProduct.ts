export interface iProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

export class Product {
  public id: number = 0;
  public name: string = '';
  public price: number = 0;
  public image: string = '';
}