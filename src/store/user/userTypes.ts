import { SerializedError } from "@reduxjs/toolkit/react"

export type userType = Partial<{
    id: number,
    firstName: string,
    lastName: string,
    gender: string,
    email: string,
    username: string,
    image: string,
}>

export type userState = {
    userList: userType[],
    curUser: userType,
    isLoading: boolean,
    isSuccess: boolean,
    error?: SerializedError,
    token: string
}

export type userLoginData = {
    username: string,
    password: string,
}