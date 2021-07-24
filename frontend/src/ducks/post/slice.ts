import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostModel } from "../../models/strapi/PostModel";
import { asyncGetPost, asyncGetPosts } from "./asyncActions";
import { PostStateType } from "./type";

export const initialState: PostStateType = {
  posts: null,
  post: null,
  loading: false,
  isError: false,
  error: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get posts pending
    builder.addCase(asyncGetPosts.pending, (state) => {
      return {
        ...state,
        loading: true,
        isError: false,
        error: "",
        posts: null,
      };
    });

    // get posts rejected
    builder.addCase(asyncGetPosts.rejected, (state) => {
      return {
        ...state,
        loading: false,
        isError: true,
        error: "投稿の取得に失敗しました。",
      };
    });

    // get posts fulfilled
    builder.addCase(
      asyncGetPosts.fulfilled,
      (
        state,
        actions: PayloadAction<{
          posts: PostModel[];
        }>
      ) => {
        return {
          ...state,
          loading: false,
          posts: actions.payload.posts,
        };
      }
    );

    // get post pending
    builder.addCase(asyncGetPost.pending, (state) => {
      return {
        ...state,
        loading: true,
        isError: false,
        error: "",
        post: null,
      };
    });

    // get posts rejected
    builder.addCase(
      asyncGetPost.rejected,
      (
        state,
        action: RejectedAction<{
          id: number;
        }>
      ) => {
        return {
          ...state,
          loading: false,
          isError: true,
          error: "投稿の取得に失敗しました。",
        };
      }
    );

    // get posts fulfilled
    builder.addCase(
      asyncGetPost.fulfilled,
      (
        state,
        actions: PayloadAction<{
          post: PostModel;
        }>
      ) => {
        return {
          ...state,
          loading: false,
          post: actions.payload.post,
        };
      }
    );
  },
});

export default postSlice;
