import {dummyJsonResponseType} from "../dummyJsonResponseType.ts";


export type UserType = {
    id: number;
    username: string;
    fullName: string;
}

export type CommentsDummyType = {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: UserType;
}

export type dummyJsonResponseCommentsType = dummyJsonResponseType & {
    comments: CommentsDummyType[];
}