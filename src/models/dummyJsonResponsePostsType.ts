import {dummyJsonResponseType} from "./dummyJsonResponseType.ts";

export type ReactionsType = {
  likes: number;
  dislikes: number;
}

export type PostsType = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: ReactionsType;
  views: number;
  userId: number;
}

export type dummyJsonResponsePostsType = dummyJsonResponseType & {
  posts: PostsType[];
}