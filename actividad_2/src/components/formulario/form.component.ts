import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";


@Component({
    standalone: true,
    selector: 'app-form',
    templateUrl: './form.component.html',
    imports: [ReactiveFormsModule, CommonModule],
})
export class FormComponent {
    formulario: FormGroup;

    constructor() {
        this.formulario = new FormGroup({
            name: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            phone: new FormControl('', Validators.required),
            age: new FormControl('', Validators.required),
            country: new FormControl('', Validators.required)
        });
    }

    sendData() {
        console.log(this.formulario.value);
        this.formulario.reset()
    }
}