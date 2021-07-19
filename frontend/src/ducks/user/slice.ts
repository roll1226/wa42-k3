import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { asyncRegisterUser } from "./asyncActions";
import { UserStateType } from "./type";

export const initialState: UserStateType = {
  username: "",
  jwt: "",
  loading: false,
  isError: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserState: (
      state,
      action: PayloadAction<{ username: string; jwt: string }>
    ) => ({
      ...state,
      username: action.payload.username,
      jwt: action.payload.jwt,
    }),

    clearUserState: (state) => ({
      ...state,
      username: "",
      jwt: "",
    }),
  },

  extraReducers: (builder) => {
    builder.addCase(asyncRegisterUser.pending, (state) => {
      return {
        ...state,
        loading: true,
        isError: false,
        error: "",
      };
    });
    builder.addCase(
      asyncRegisterUser.rejected,
      (
        state,
        action: RejectedAction<{
          username: string;
          email: string;
          password: string;
        }>
      ) => {
        return {
          ...state,
          loading: false,
          isError: true,
          error: "ログインに失敗しました。",
        };
      }
    );
    builder.addCase(
      asyncRegisterUser.fulfilled,
      (
        state,
        action: PayloadAction<{
          username: string;
          jwt: string;
        }>
      ) => {
        return {
          ...state,
          loading: false,
          isError: false,
          error: "",
          username: action.payload.username,
          jwt: action.payload.jwt,
        };
      }
    );
  },
});

export default userSlice;
