import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "./store.reducer";

export const store =configureStore({
    reducer: {reducer},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
