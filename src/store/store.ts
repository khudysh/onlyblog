import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import userSlice from "./user/userSlice";
import blogSlice from "./blog/blogSlice";

export const store = configureStore({
    reducer: {
        counter: countSlice,
        user: userSlice,
        blog: blogSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
