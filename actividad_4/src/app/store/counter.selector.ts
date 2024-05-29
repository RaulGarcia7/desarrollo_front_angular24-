import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectCounterState = createFeatureSelector<number>('counter');

export const selectCounterValue = createSelector(
    selectCounterState,
    (state: number) => state
);