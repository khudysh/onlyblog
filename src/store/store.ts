import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import userSlice from "./user/userSlice";
import blogSlice from "./blog/blogSlice";

export const store = configureStore({
    reducer: {
        counter: countSlice,
        user: userSlice,
<<<<<<< HEAD
=======
        blog: blogSlice,
>>>>>>> 5476a8fc10c3fb40c9ebb56325b91453387c367b
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
