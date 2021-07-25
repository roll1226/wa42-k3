import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useUserState } from "../ducks/user/selectors";
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

export const useAuthRedirectEffect = () => {
  const router = useRouter();
  const state = useUserState().user;

  useEffect(() => {
    const userInfo = rendUserInfo();
    const jwt = rendJwt();

    if (!userInfo || !jwt) router.push("/");
  }, [state.userInfo]);
};
