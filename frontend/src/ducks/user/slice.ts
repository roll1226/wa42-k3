import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfoModel } from "../../models/strapi/UserInfoModel";
import SessionUtil from "../../utils/session/SessionUtil";
import { asyncRegisterUser, asyncSignInUser } from "./asyncActions";
import { ModalType, UserStateType } from "./type";

export const initialState: UserStateType = {
  userInfo: null,
  jwt: "",
  loading: false,
  isError: false,
  error: "",
  modalType: ModalType.NULL,
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

    setModalType: (state, action: PayloadAction<{ modalType: ModalType }>) => ({
      ...state,
      modalType: action.payload.modalType,
    }),
  },

  extraReducers: (builder) => {
    // register user pending
    builder.addCase(asyncRegisterUser.pending, (state) => {
      return {
        ...state,
        loading: true,
        isError: false,
        error: "",
      };
    });

    // register user rejected
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
          error: "登録に失敗しました。",
        };
      }
    );

    // register user fulfilled
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
          modalType: ModalType.NULL,
        };
      }
    );

    // sign in user pending
    builder.addCase(asyncSignInUser.pending, (state) => {
      return {
        ...state,
        loading: true,
        isError: false,
        error: "",
      };
    });

    // sign in user rejected
    builder.addCase(
      asyncSignInUser.rejected,
      (
        state,
        action: RejectedAction<{
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

    // sign in user fulfilled
    builder.addCase(
      asyncSignInUser.fulfilled,
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
          modalType: ModalType.NULL,
        };
      }
    );
  },
});

export default userSlice;
