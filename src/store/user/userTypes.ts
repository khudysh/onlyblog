export type userData = Partial<{
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
}>

export type userState = {
    curUser: userData,
    isLoading: boolean,
    isSuccess: boolean,
    error?: string, // ????
    token: string,
}

export type userLoginData = {
    username: string,
    password: string,
}