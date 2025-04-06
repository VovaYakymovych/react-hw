import {dummyJsonResponsePostsType, PostsType} from "../models/dummyJsonResponsePostsType.ts";
import {CommentsType, dummyJsonResponseCommentsType} from "../models/dummyJsonCommentsResponseType.ts";
import {dummyJsonResponseTodosType, TodosType} from "../models/dummyJsonResponseTodosType.ts";


export const endpoint = import.meta.env.VITE_API_DUMMYJSON_URL

export const getDummyJsonResPosts = async (): Promise<PostsType[]> => {
    const posts:dummyJsonResponsePostsType = await fetch(endpoint+'/posts')
        .then(value=> value.json());
    return posts.posts
}

export const getDummyJsonResComments = async (): Promise<CommentsType[]> => {
    const comments:dummyJsonResponseCommentsType = await fetch(endpoint+'/comments')
        .then(value=> value.json());
    return comments.comments
}

export const getDummyJsonResTodos = async (): Promise<TodosType[]> => {
    const todos:dummyJsonResponseTodosType = await fetch(endpoint+'/todos')
        .then(value=> value.json());
    return todos.todos
}