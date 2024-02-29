import { createAsyncThunk } from "@reduxjs/toolkit/react";
import api from "../api";
import { userLoginData } from "./userTypes";

<<<<<<< HEAD
export const login = createAsyncThunk(
    "user/login",
    async (userData: userLoginData, thunkAPI) => {
        try {
            let res = await api.post('auth/login', userData)
            if (res.status !== 200) {
                return thunkAPI.rejectWithValue(res.data);
            }
            return res.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }

=======
export const userLogin = createAsyncThunk(
    "user/userLogin",
    async (userLoginData: userLoginData, thunkAPI) => {
        try {
            let res = await api.post('auth/login', userLoginData);

            if (res.status !== 200) {
                return thunkAPI.rejectWithValue(res.data);
            }

            return res.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
>>>>>>> 5476a8fc10c3fb40c9ebb56325b91453387c367b
    }
)

export const getCurUser = createAsyncThunk(
    "user/getCurUser",
    async (token: string, thunkAPI) => {
        try {
            let res = await api.get('auth/me', {
                headers: {
<<<<<<< HEAD
                    Authorization: 'Bearer ' + token,
                }
            })
            if (res.status !== 200) {
                return thunkAPI.rejectWithValue(res.data);
            }
            return res.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }

    }
)
=======
                    Authorization: 'Bearer ' + token, 
                }
            });

            if (res.status !== 200) {
                return thunkAPI.rejectWithValue(res.data);
            }

            return res.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

>>>>>>> 5476a8fc10c3fb40c9ebb56325b91453387c367b
