import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})

export class CounterComponent {
    seconds: number = 0;

    incrementTime() {
        this.seconds++;
    }

    decreaseTime() {
        if (this.seconds > 0) {
            this.seconds--;
        }
    }

    startCountdown() {
        const interval = setInterval(() => {
            if (this.seconds > 0) {
                this.seconds--;
            } else {
                clearInterval(interval)
            }
        }, 1000);
    }
}