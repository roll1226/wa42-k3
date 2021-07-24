import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { asyncGetMeUserInfo } from "../ducks/user/asyncActions";
import userSlice from "../ducks/user/slice";
import { UserInfoModel } from "../models/strapi/UserInfoModel";
import SessionUtil from "../utils/session/SessionUtil";

const rendUserInfo = (): UserInfoModel | null => {
  if (typeof window === "undefined") return null;

  const userInfo = SessionUtil.getSession("userInfo");
  return userInfo != null ? JSON.parse(userInfo) : null;
};

const rendJwt = (): string => {
  if (typeof window === "undefined") return "";

  const jwt = SessionUtil.getSession("jwt");
  return jwt != null ? jwt : "";
};

export const useUserInfoEffect = () => {
  const [userInfo] = useState<UserInfoModel | null>(rendUserInfo());
  const [jwt] = useState<string>(rendJwt());
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo || !jwt) return;

    dispatch(asyncGetMeUserInfo({ jwt, id: userInfo.id }));
    dispatch(userSlice.actions.setUserState({ jwt }));
  }, [userInfo, jwt]);
};
