import {commentsType} from "../models/commentsType.ts";

export const endpoint = import.meta.env.VITE_API_JSONPLACEHOLDER_URL

export const getComments = async (): Promise<commentsType[]> => {
    return await fetch(endpoint + '/comments')
        .then(value => value.json());
    ;
}