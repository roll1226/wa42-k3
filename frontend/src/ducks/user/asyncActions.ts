import { createAsyncThunk } from "@reduxjs/toolkit";
import StrapiUtil from "../../utils/lib/StrapiUtil";

export const asyncRegisterUser = createAsyncThunk(
  "user/asyncRegisterUser",
  async (arg: {
    username: string;
    email: string;
    password: string;
  }): Promise<{ username: string; jwt: string }> => {
    const response = await StrapiUtil.createAccount(
      arg.username,
      arg.email,
      arg.password
    );

    return {
      username: response.data.user.username as string,
      jwt: response.data.jwt as string,
    };
  }
);
