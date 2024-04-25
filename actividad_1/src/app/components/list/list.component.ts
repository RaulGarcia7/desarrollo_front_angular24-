import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})

export class ListComponent {
  items: string[] = [];
  newItem: string = '';


  addItem(newItem: string) {
    if (!this.items.includes(newItem) && newItem != ''){
        this.items.push(newItem);
        this.newItem = '';
        console.log("Se ha agregado correctamente: ", newItem)
    } else if (newItem === '') {
        alert('Por favor, introduce un elemento válido');
    } else {
        alert('Ese elemento ya se encuentra en la lista');
    }
    
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    console.log("Se ha eliminado", index)
  }
}