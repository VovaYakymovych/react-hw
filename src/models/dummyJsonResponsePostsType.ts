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

export type dummyJsonResponsePostsType = {
  posts: PostsType[];
  total: number;
  skip: number;
  limit: number;
}