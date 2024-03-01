import { createSlice } from "@reduxjs/toolkit";
import { blogState } from "./blogTypes";
import { getPostComments, getSubs, getUserProfile } from "./blogActions";

const initialState: blogState = {
    profileUser: {},
    posts: [],
    subs: [],
    isLoading: false,
    isSuccess: false,
    error: '',
    isLoadingComments: false,
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
                    // state.error = action.payload.message
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
            .addCase(getPostComments.pending,
                (state) => {
                    state.isLoadingComments = true;
                }
            )
            .addCase(getPostComments.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = false;
                    // state.error = action.payload
                }
            )
            .addCase(getPostComments.fulfilled,
                (state, action) => {
                    state.posts = state.posts.map((post) => {
                        if (post.id == action.payload.comments[0].postId) {
                            post.comments = action.payload.comments;
                        }
                        return post;
                    })
                }
            )
            .addCase(getSubs.pending,
                (state) => {
                    state.isLoading = true;
                }
            )
            .addCase(getSubs.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = false;
                    // state.error = action.payload
                }
            )
            .addCase(getSubs.fulfilled,
                (state, action) => {
                    state.subs = action.payload;
                    state.isSuccess = true;
                    state.isLoading = false;
                }
            )
    },
})



export const { } = blogSlice.actions

export default blogSlice.reducer