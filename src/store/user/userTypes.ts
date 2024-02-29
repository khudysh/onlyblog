<<<<<<< HEAD
import { SerializedError } from "@reduxjs/toolkit/react"

=======
>>>>>>> 5476a8fc10c3fb40c9ebb56325b91453387c367b
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
<<<<<<< HEAD
    userList: userType[],
    curUser: userType,
    isLoading: boolean,
    isSuccess: boolean,
    error?: SerializedError,
    token: string
=======
    curUser: userType,
    isLoading: boolean,
    isSuccess: boolean,
    error?: string, // ????
    token: string,
>>>>>>> 5476a8fc10c3fb40c9ebb56325b91453387c367b
}

export type userLoginData = {
    username: string,
    password: string,
}