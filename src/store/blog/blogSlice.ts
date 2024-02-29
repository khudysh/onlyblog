import { createSlice } from "@reduxjs/toolkit";
import { blogState } from "./blogTypes";
import { getUserProfile } from "./blogActions";


const initialState: blogState = {
    profileUser: {},
    posts: [],
    isLoading: false,
    isSuccess: false,
    error: '',
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(getUserProfile.pending,
                (state) => {
                    console.log("Loading...");
                    state.isLoading = true;
                    state.isSuccess = false;
                    state.error = undefined

                }
            )
            .addCase(getUserProfile.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = false;
                    // state.error = action.payload
                }
            )
            .addCase(getUserProfile.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.error = undefined;
                    console.log(action);
                    state.profileUser = action.payload[0];
                    state.posts = action.payload[1];
                }
            )
    },
})



export const { } = blogSlice.actions

export default blogSlice.reducer