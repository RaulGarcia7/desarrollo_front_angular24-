import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/models/app-state.model";
import { add, decrease, reset } from "src/app/store/counter.actions";
import { selectCounterValue } from "src/app/store/counter.selector";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent{

    counter: Observable<number> = this.store.select(selectCounterValue);

    constructor(private readonly store: Store<AppState>){}

    increaseCounter() {
        this.store.dispatch(add({ value: 5 }));
    }

    decreaseCounter() {
        this.store.dispatch(decrease({ value: 5 }));
    }

    resetCounter() {
        this.store.dispatch(reset());
    }
}