import { PostModel } from "./PostModel";

export type UserInfoModel = {
  blocked: boolean | null;
  confirmed: boolean;
  created_at: string;
  email: string;
  id: number;
  provider: string;
  role: {
    description: string;
    id: number;
    name: string;
    type: string;
  };
  updated_at: string;
  username: string;
  posts: PostModel[];
};
