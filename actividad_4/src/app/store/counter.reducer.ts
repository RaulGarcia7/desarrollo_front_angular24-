import { createReducer, on } from "@ngrx/store"
import { add, decrease, reset } from "./counter.actions";


export const initialState: number = localStorage.getItem('counter')
    ? Number(localStorage.getItem('counter'))
    : 0;

export const counterReducer = createReducer(
    initialState,
    on(add, (state, { value }) => {
        const newState = state + value;
        localStorage.setItem('counter', newState.toString());
        return newState
    }),
    on(decrease, (state, {value}) => {
        const newState = state - value;
        localStorage.setItem('counter', newState.toString());
        return newState;
    }),
    on(reset, ()=>{
        localStorage.setItem('counter', '0');
        return 0;
    })
);