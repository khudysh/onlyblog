import { createSlice } from "@reduxjs/toolkit";
import { userState } from "./userTypes";
<<<<<<< HEAD
import { getCurUser, login } from "./userActions";

const initialState: userState = {
    userList: [],
    curUser: {},
    isLoading: false,
    isSuccess: false,
    error: undefined,
=======
import { getCurUser,  userLogin } from "./userActions";

const initialState: userState = {
    curUser: {},
    isLoading: false,
    isSuccess: false,
    error: '',
>>>>>>> 5476a8fc10c3fb40c9ebb56325b91453387c367b
    token: localStorage.getItem('token') ?? ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        USER_LOGOUT(state) {
            state.curUser = {};
            state.error = '';
            state.isLoading = false;
            state.isSuccess = false;
            state.token = '';
            localStorage.removeItem('token');
        }
    },
    extraReducers(builder) {
        builder
<<<<<<< HEAD
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
=======
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
>>>>>>> 5476a8fc10c3fb40c9ebb56325b91453387c367b
                (state, action) => {
                    localStorage.setItem('token', action.payload.token)
                    state.isLoading = false;
                    state.isSuccess = true;
<<<<<<< HEAD
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
=======
                    state.error = '';
                    state.curUser = action.payload;
                    state.token = action.payload.token;
>>>>>>> 5476a8fc10c3fb40c9ebb56325b91453387c367b
                }
            )
            .addCase(getCurUser.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = false;
<<<<<<< HEAD
                    state.error = action.error
=======
                    state.error = action.error.message
>>>>>>> 5476a8fc10c3fb40c9ebb56325b91453387c367b
                }
            )
            .addCase(getCurUser.fulfilled,
                (state, action) => {
<<<<<<< HEAD
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
=======
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.error = '';
                    state.curUser = action.payload;
                }
            )
    }
})

export const { USER_LOGOUT } = userSlice.actions
>>>>>>> 5476a8fc10c3fb40c9ebb56325b91453387c367b

export default userSlice.reducer