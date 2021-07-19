import { useSelector } from "react-redux";
import { UserStateType } from "./type";

export const useUserState = () => {
  return useSelector((state: { user: UserStateType }) => state);
};
