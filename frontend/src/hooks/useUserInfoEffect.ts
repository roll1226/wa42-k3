import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import userSlice from "../ducks/user/slice";
import { UserInfoModel } from "../models/strapi/UserInfoModel";
import SessionUtil from "../utils/session/SessionUtil";

const rendUserInfo = (): UserInfoModel | null => {
  if (typeof window !== "undefined") {
    const userInfo = SessionUtil.getSession("userInfo");
    return userInfo != null ? JSON.parse(userInfo) : null;
  }
  return null;
};

const rendJwt = (): string => {
  if (typeof window !== "undefined") {
    const jwt = SessionUtil.getSession("jwt");
    return jwt != null ? jwt : "";
  }
  return "";
};

export const useUserInfoEffect = () => {
  const [userInfo] = useState<UserInfoModel | null>(rendUserInfo());
  const [jwt] = useState<string>(rendJwt());
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo && !jwt) return;
    dispatch(userSlice.actions.setUserState({ userInfo, jwt }));
  }, [userInfo, jwt]);
};
