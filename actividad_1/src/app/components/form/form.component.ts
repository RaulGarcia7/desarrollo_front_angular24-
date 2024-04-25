import { Component } from "@angular/core";


interface User { // Definimos usuario como objeto para utilizarlo en users y newUsers
    name: string;
    lastName: string;
    phone: string;
    birthday: string;
}

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})


export class FormComponent {
    users: User[] = [];
    newUser: User = {
    name: '',
    lastName: '',
    phone: '',
    birthday: ''
  };
  

    addUser() {
        // Agregamos usuario y restablecemos para añadir nuevos usuarios
        if (this.newUser.name && this.newUser.lastName && this.newUser.phone && this.newUser.birthday) {
            this.users.push(this.newUser);
        
            this.newUser = {
                name: '',
                lastName: '',
                phone: '',
                birthday: ''
            };
        } else {
            alert("Por favor, rellena todos los datos del formulario")
        }
    
    }
}