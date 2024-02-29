import { userType } from "../user/userTypes";

export type postType = {
    id: number,
    title: string,
    body: string,
    userId: number, 
    tags: string[],
    reactions: number
}

export type blogState = {
    profileUser: userType,
    posts: postType[],
    isLoading: boolean,
    isSuccess: boolean,
    error?: string,
}