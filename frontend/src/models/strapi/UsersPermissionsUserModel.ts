export type UsersPermissionsUserModel = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean | null;
  role: number;
  created_at: Date;
  updated_at: Date;
};
