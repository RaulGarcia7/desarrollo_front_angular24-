import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeApi } from 'src/app/services/fake.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];
  categoria: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fakeApi: FakeApi
  ) {}

  ngOnInit(): void {
    this.categoria = this.route.snapshot.paramMap.get('id')!;
    this.fakeApi.getProductosPorCategoria(this.categoria).subscribe(data => {
      this.productos = data;
    });
  }

  showProduct(id: number): void {
    this.router.navigate(['/tienda/producto', id]);
  }
}
