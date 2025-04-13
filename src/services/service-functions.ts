import {dummyJsonResponsePostsType, PostsDummyType} from "../models/PostsTypes/dummyJsonResponsePostsType.ts";
import {CommentsDummyType, dummyJsonResponseCommentsType} from "../models/CommentsTypes/dummyJsonResponseCommentsType.ts";
import {dummyJsonResponseUsersType, UsersDummyType} from "../models/UsersTypes/dummyJsonResponseUsersType.ts";
import {CommentsPlaceholderType} from "../models/CommentsTypes/CommentsPlaceholderType.ts";
import {PostsPlaceholderType} from "../models/PostsTypes/PostsPlaceholdertype.ts";
import {UsersPlaceholderType} from "../models/UsersTypes/UsersPlaceholderType.ts";

export const dummyJsonUrl = import.meta.env.VITE_DUMMYJSON_BASE_URL
export const jsonPlaceholderUrl = import.meta.env.VITE_JSONPLACEHOLDER_BASE_LINK

export const getDummyJsonResPosts = async (): Promise<PostsDummyType[]> => {
    const posts:dummyJsonResponsePostsType = await fetch(dummyJsonUrl+'/posts')
        .then(value=> value.json());
    return posts.posts
}

export const getDummyJsonResComments = async (): Promise<CommentsDummyType[]> => {
    const comments:dummyJsonResponseCommentsType = await fetch(dummyJsonUrl+'/comments')
        .then(value=> value.json());
    return comments.comments
}

export const getDummyJsonResUsers = async (): Promise<UsersDummyType[]> => {
    const users:dummyJsonResponseUsersType = await fetch(dummyJsonUrl+'/users')
        .then(value=> value.json());
    return users.users
}

export const getPlaceholderComments = async (): Promise<CommentsPlaceholderType[]> => {
    return await fetch(jsonPlaceholderUrl + '/comments')
        .then(value => value.json());
}

export const getPlaceholderPosts = async (): Promise<PostsPlaceholderType[]> => {
    return await fetch(jsonPlaceholderUrl + '/posts')
        .then(value => value.json());
}

export const getPlaceholderUsers = async (): Promise<UsersPlaceholderType[]> => {
    return await fetch(jsonPlaceholderUrl + '/users')
        .then(value => value.json());
}