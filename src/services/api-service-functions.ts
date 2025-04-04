import {PostsType} from "../models/PostsType.ts";

export const getPosts = async (): Promise<PostsType[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
    ;
}