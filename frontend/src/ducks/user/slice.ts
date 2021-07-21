import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfoModel } from "../../models/strapi/UserInfoModel";
import LoggerUtil from "../../utils/debugger/LoggerUtil";
import SessionUtil from "../../utils/session/SessionUtil";
import { asyncRegisterUser } from "./asyncActions";
import { UserStateType } from "./type";

export const initialState: UserStateType = {
  userInfo: null,
  jwt: "",
  loading: false,
  isError: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState: (
      state,
      action: PayloadAction<{ userInfo: UserInfoModel | null; jwt: string }>
    ) => ({
      ...state,
      userInfo: action.payload.userInfo,
      jwt: action.payload.jwt,
    }),

    clearUserState: (state) => ({
      ...state,
      userInfo: null,
      jwt: "",
    }),
  },

  extraReducers: (builder) => {
    /**
     * register user pending
     */
    builder.addCase(asyncRegisterUser.pending, (state) => {
      return {
        ...state,
        loading: true,
        isError: false,
        error: "",
      };
    });

    /**
     * register user rejected
     */
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

    /**
     * register user fulfilled
     */
    builder.addCase(
      asyncRegisterUser.fulfilled,
      (
        state,
        action: PayloadAction<{
          userInfo: UserInfoModel;
          jwt: string;
        }>
      ) => {
        SessionUtil.setSession(
          "userInfo",
          JSON.stringify(action.payload.userInfo)
        );
        SessionUtil.setSession("jwt", action.payload.jwt);

        return {
          ...state,
          loading: false,
          isError: false,
          error: "",
          userInfo: action.payload.userInfo,
          jwt: action.payload.jwt,
        };
      }
    );
  },
});

export default userSlice;
