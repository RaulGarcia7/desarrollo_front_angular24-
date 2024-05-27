import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

@Injectable()
export class FakeApi {
  private url: string = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}/products/categories`);
  }

  getProductosPorCategoria(categoria: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.url}/products/category/${categoria}`);
  }

  getProductoDetalle(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.url}/products/${id}`);
  }
}
