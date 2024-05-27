import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakeApi } from 'src/app/services/fake.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html'
})
export class CategoriasComponent implements OnInit {

  categorias: string[] = [];

  constructor(
    private fakeApi: FakeApi,
    private router: Router
  ){}

  ngOnInit(): void {
      this.fakeApi.getCategorias().subscribe(data => {
        this.categorias = data;
      });
  }

  showCategorias(categoria: string): void {
    this.router.navigate(['/tienda/categoria', categoria]);
  }
}
