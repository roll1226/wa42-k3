import axiosUtil from "./AxiosUtil";
class StrapiUtil {
  /**
   * create account
   * @param {string} username
   * @param {string} email
   * @param {string} password
   */
  public static createAccount(
    username: string,
    email: string,
    password: string
  ) {
    return axiosUtil.post(`/auth/local/register`, {
      username,
      email,
      password,
    });
  }
}

export default StrapiUtil;
