import { PostModel } from "../../models/strapi/PostModel";

export type PostStateType = {
  posts: PostModel[] | null;
  post: PostModel | null;
  userPosts: PostModel[] | null;
  loading: boolean;
  isError: boolean;
  error: string;
};
