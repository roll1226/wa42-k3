import { UserInfoModel } from "../../models/strapi/UserInfoModel";

export enum ModalType {
  SIGN_IN,
  REGISTER,
  NULL
}

export type UserStateType = {
  userInfo: UserInfoModel | null;
  jwt: string;
  loading: boolean;
  isError: boolean;
  error: string;
  modalType: ModalType;
};
