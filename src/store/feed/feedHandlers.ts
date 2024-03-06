import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { feedState } from "./feedTypes";
import { getFeedPosts } from "./feedActions";


export const getFeedPostsHandlers = (builder: ActionReducerMapBuilder<feedState>) => {
    builder
        .addCase(getFeedPosts.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.error = '';
        })
        .addCase(getFeedPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            // state.error = action.error.message;
        })
        .addCase(getFeedPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.error = '';
            state.posts = action.payload.posts;
            console.log(action.payload.posts)
        });
};