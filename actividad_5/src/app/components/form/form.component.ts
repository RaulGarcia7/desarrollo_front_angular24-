import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from '../formDialog/form-dialog.component';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{

  formData: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
      
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.formData = result;
      }
    });
  }
}