import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";



export const getUserProfile = createAsyncThunk(
    "blog/getUserProfile",
    async (username: string, thunkAPI) => {
        try {
            let profileUserRes = await api.get('users/filter?key=username&value=' +  username);
            if (profileUserRes.status !== 200) {
                return thunkAPI.rejectWithValue(profileUserRes.data);
            } 

            let userPostsRes = await api.get(`users/${profileUserRes.data.users[0].id}/posts`);

            if (userPostsRes.status !== 200) {
                return thunkAPI.rejectWithValue(userPostsRes.data);
            } 

            return [profileUserRes.data.users[0], userPostsRes.data.posts]
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }

    }
)