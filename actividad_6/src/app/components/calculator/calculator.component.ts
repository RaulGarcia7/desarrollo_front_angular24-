import { Component } from "@angular/core";

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
})
export class CalculatorComponent {
    number1: number = 0;
    number2: number = 0;
    result: number = 0;

    add(): void {
        this.result = this.number1 + this.number2;
    }

    subtract(): void {
        this.result = this.number1 - this.number2;
    }

    multiply(): void {
        this.result = this.number1 * this.number2;
    }
}