import {dummyJsonResponsePostsType, PostsType} from "../models/dummyJsonResponsePostsType.ts";
import {CommentsType, dummyJsonResponseCommentsType} from "../models/dummyJsonCommentsResponseType.ts";


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