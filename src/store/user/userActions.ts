import { createAsyncThunk } from "@reduxjs/toolkit/react";
import api from "../api";
import { userLoginData } from "./userTypes";

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

    }
)

export const getCurUser = createAsyncThunk(
    "user/getCurUser",
    async (token: string, thunkAPI) => {
        try {
            let res = await api.get('auth/me', {
                headers: {
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
