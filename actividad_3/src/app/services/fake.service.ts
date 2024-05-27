import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable() 

export class FakeApi {

    private url: string = 'https://fakestoreapi.com'

    constructor(
        private http: HttpClient
    ) {}

    getCategorias(): Observable<any> { //Checar el any
        return this.http.get(`${this.url}/products/categories`);
    }
    
    getProductosPorCategoria(categoria: string): Observable<any> {
        return this.http.get(`${this.url}/products/category/${categoria}`);
    }
    
    getProductoDetalle(id: number): Observable<any> {
        return this.http.get(`${this.url}/products/${id}`);
    }
}
