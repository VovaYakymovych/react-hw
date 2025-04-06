import {dummyJsonResponsePostsType, PostsType} from "../models/dummyJsonResponseType.ts";


export const endpoint = import.meta.env.VITE_API_DUMMYJSON_URL

export const getDummyJsonResPosts = async (): Promise<PostsType[]> => {
    const response:dummyJsonResponsePostsType = await fetch(endpoint+'/posts')
        .then(value=> value.json());
    return response.posts
}