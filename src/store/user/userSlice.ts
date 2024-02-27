import { createSlice } from "@reduxjs/toolkit";
import { userState } from "./userTypes";
import { getCurUser, userLogin } from "./userActions";

const initialState: userState = {
    curUser: {},
    isLoading: false,
    isSuccess: false,
    error: '',
    token: localStorage.getItem('token') ?? ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(userLogin.pending,
                (state) => {
                    state.isLoading = true;
                    state.isSuccess = false;
                    state.error = ''
                }
            )
            .addCase(userLogin.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = false;
                    state.error = action.error.message
                }
            )
            .addCase(userLogin.fulfilled,
                (state, action) => {
                    localStorage.setItem('token', action.payload.token)
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.error = '';
                    state.curUser = action.payload;
                    state.token = action.payload.token;
                }
            )
            .addCase(getCurUser.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = false;
                    state.error = action.error.message
                }
            )
            .addCase(getCurUser.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.error = '';
                    state.curUser = action.payload;
                }
            )
    }
})

export const { } = userSlice.actions

export default userSlice.reducer