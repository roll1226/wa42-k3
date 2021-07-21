import { UserInfoModel } from "../../models/strapi/UserInfoModel";

export type UserStateType = {
  userInfo: UserInfoModel | null;
  jwt: string;
  loading: boolean;
  isError: boolean;
  error: string;
};
