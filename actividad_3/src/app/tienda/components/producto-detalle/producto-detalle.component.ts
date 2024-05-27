import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeApi } from 'src/app/services/fake.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html'
})
export class ProductoDetalleComponent implements OnInit {
  producto:  ;

  constructor(
    private route: ActivatedRoute,
    private fakeApi: FakeApi
  ) {}

  ngOnInit(): void {
      const id = +this.route.snapshot.paramMap.get('id')!;
      this.fakeApi.getProductoDetalle(id).subscribe(data => {
        this.producto = data;
      })
  }

}
