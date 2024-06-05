import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-formDialog',
    templateUrl: './form-dialog.component.html'
})
export class FormDialogComponent implements OnInit {
    nombre: string = "";
    email: string = "";
    direccion: string = "";

    constructor(public dialogRef: MatDialogRef<FormDialogComponent>) {}

    ngOnInit(): void {
    }

    closeDialog(): void {
        this.dialogRef.close()
    }

    submitForm(): void {
        const formData = {
            nombre: this.nombre,
            email: this.email,
            direccion: this.direccion
        };
        this.dialogRef.close(formData)
    }
}