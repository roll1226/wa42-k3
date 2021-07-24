import { UsersPermissionsUserModel } from "./UsersPermissionsUserModel";

export type PostModel = {
  id: number;
  title: string;
  body: string;
  users_permissions_user: UsersPermissionsUserModel | number;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
};
