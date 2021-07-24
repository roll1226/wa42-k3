import { useSelector } from "react-redux";
import { PostStateType } from "./type";

export const usePostState = () => {
  return useSelector((state: { post: PostStateType }) => state);
};
