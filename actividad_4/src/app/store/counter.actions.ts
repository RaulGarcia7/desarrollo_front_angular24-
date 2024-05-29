import { createAction, props } from "@ngrx/store";

export const add = createAction('[Counter] Add', props<{ value: number }>())
export const decrease = createAction('[Counter] Decrease', props<{ value: number }>())
export const reset = createAction('[Counter] Reset');