import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../classes/iProduct';

@Injectable({ providedIn: 'root' })
export class ProductHttpHandleErrorService {
  private _url = '/dataset/products.json';

  constructor(private _http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this._http.get<Product[]>(this._url).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.getProductList().pipe(
      map((products: Product[]) => products.find(p => p.id === id)),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }
}

