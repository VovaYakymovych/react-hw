import {PostsType} from "../models/PostsType.ts";

export const endpoint = import.meta.env.VITE_API_JSONPLACEHOLDER_URL

export const getPosts = async (): Promise<PostsType[]> => {
    return await fetch(endpoint+'/posts')
        .then(value => value.json());
    ;
}