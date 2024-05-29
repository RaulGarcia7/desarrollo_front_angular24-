import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {
  columns: string[] = ['Columna 1', 'Columna 2', 'Columna 3', 'Columna 4', 'Columna 5', 'Columna 6', 'Columna Adicional 1', 'Columna Adicional 2'];
  rows: number[][] = [];
  showExtraColumns = false;
  highlightHeader = false;

  constructor() {
    this.generateRandomRows(15); 
  }

  generateRandomRows(numRows: number) {
    //Generamos datos falsos con numeros aleatorios
    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < this.columns.length; j++) {
        row.push(Math.floor(Math.random() * 100)); 
      }
      this.rows.push(row);
    }
  }

  toggleHeaderStyle() {
    this.highlightHeader = !this.highlightHeader;
    this.showExtraColumns = !this.showExtraColumns;

     // Ocultar las columnas 5 y 6 si se están viendo las columnas adicionales
     if (this.showExtraColumns) {
      this.columns = this.columns.filter((column, index) => index < 4 || index >= 6);
    } else {

      this.columns = ['Columna 1', 'Columna 2', 'Columna 3', 'Columna 4', 'Columna 5', 'Columna 6', 'Columna Adicional 1', 'Columna Adicional 2'];
    }
  }
}


