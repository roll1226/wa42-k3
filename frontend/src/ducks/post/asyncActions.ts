import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostModel } from "../../models/strapi/PostModel";
import LoggerUtil from "../../utils/debugger/LoggerUtil";
import StrapiUtil from "../../utils/lib/StrapiUtil";

export const asyncGetPosts = createAsyncThunk(
  "post/asyncGetPosts",
  async (): Promise<{ posts: PostModel[] }> => {
    const response = await StrapiUtil.getPosts();

    LoggerUtil.debug("posts", response);

    return {
      posts: response.data as PostModel[],
    };
  }
);

export const asyncGetPost = createAsyncThunk(
  "post/asyncGetPost",
  async (arg: { id: number }): Promise<{ post: PostModel }> => {
    const response = await StrapiUtil.getPost(arg.id);

    LoggerUtil.debug("post", response);

    return {
      post: response.data as PostModel,
    };
  }
);

export const asyncGetUserPosts = createAsyncThunk(
  "post/asyncGetUserPost",
  async (arg: { id: string | number }): Promise<{ userPosts: PostModel[] }> => {
    const response = await StrapiUtil.getUserPost(arg.id);

    LoggerUtil.debug("user post", response);

    return {
      userPosts: response.data as PostModel[],
    };
  }
);
