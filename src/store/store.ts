import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";

export const store = configureStore({
    reducer: {
        counter: countSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;