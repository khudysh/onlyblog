import { createSlice } from "@reduxjs/toolkit";
import { userState } from "./userTypes";
import { getCurUser, login } from "./userActions";

const initialState: userState = {
    userList: [],
    curUser: {},
    isLoading: false,
    isSuccess: false,
    error: undefined,
    token: localStorage.getItem('token') ?? ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(login.pending,
                (state) => {
                    console.log("Loading...");
                    state.isLoading = true;
                    state.isSuccess = false;
                    state.error = undefined
                }
            )
            .addCase(login.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = false;
                    state.error = action.error
                }
            )
            .addCase(login.fulfilled,
                (state, action) => {
                    localStorage.setItem('token', action.payload.token)
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.error = undefined
                    state.curUser = action.payload
                }
            )
            // getCurUser
            .addCase(getCurUser.pending,
                (state) => {
                    console.log("Loading...");
                    state.isLoading = true;
                    state.isSuccess = false;
                    state.error = undefined
                }
            )
            .addCase(getCurUser.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = false;
                    state.error = action.error
                }
            )
            .addCase(getCurUser.fulfilled,
                (state, action) => {
                    // localStorage.setItem('token', action.payload.token)
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.error = undefined
                    state.curUser = action.payload
                }
            )
    },
})



export const { } = userSlice.actions

export default userSlice.reducer