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

  /**
   * sign in account
   * @param {string} identifier
   * @param {string} password
   */
  public static signInAccount(identifier: string, password: string) {
    return axiosUtil.post("/auth/local", {
      identifier,
      password,
    });
  }
}

export default StrapiUtil;
