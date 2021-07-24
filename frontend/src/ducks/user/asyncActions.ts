import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserInfoModel } from "../../models/strapi/UserInfoModel";
import LoggerUtil from "../../utils/debugger/LoggerUtil";
import StrapiUtil from "../../utils/lib/StrapiUtil";

export const asyncRegisterUser = createAsyncThunk(
  "user/asyncRegisterUser",
  async (arg: {
    username: string;
    email: string;
    password: string;
  }): Promise<{ userInfo: UserInfoModel; jwt: string }> => {
    const response = await StrapiUtil.createAccount(
      arg.username,
      arg.email,
      arg.password
    );

    LoggerUtil.debug(response);

    return {
      userInfo: response.data.user as UserInfoModel,
      jwt: response.data.jwt as string,
    };
  }
);

export const asyncSignInUser = createAsyncThunk(
  "user/asyncSignInUser",
  async (arg: {
    email: string;
    password: string;
  }): Promise<{ userInfo: UserInfoModel; jwt: string }> => {
    const response = await StrapiUtil.signInAccount(arg.email, arg.password);

    LoggerUtil.debug(response);

    return {
      userInfo: response.data.user as UserInfoModel,
      jwt: response.data.jwt as string,
    };
  }
);

export const asyncGetMeUserInfo = createAsyncThunk(
  "user/asyncGetMeUserInfo",
  async (arg: {
    jwt: string;
    id: number;
  }): Promise<{ userInfo: UserInfoModel }> => {
    const response = await StrapiUtil.getMeUserInfo(arg.jwt, arg.id);

    LoggerUtil.debug("get me user info", response);

    return { userInfo: response.data as UserInfoModel };
  }
);
