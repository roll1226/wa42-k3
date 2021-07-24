import axiosUtil from "./AxiosUtil";
class StrapiUtil {
  /**
   * create account
   * @param {string} username ユーザ名
   * @param {string} email メールアドレス
   * @param {string} password パスワード
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
   * @param {string} identifier メールアドレス
   * @param {string} password パスワード
   */
  public static signInAccount(identifier: string, password: string) {
    return axiosUtil.post("/auth/local", {
      identifier,
      password,
    });
  }

  /**
   * upload file
   * @param {File} file ファイル
   * @param {string} jwt jwt
   */
  public static uploadFile(file: File, jwt: string) {
    const uploadData = new FormData();
    uploadData.append("files", file);

    return axiosUtil.post("/upload", uploadData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${jwt}`,
      },
    });
  }

  /**
   * get me user info
   * @param {string} jwt jwt
   */
  public static getMeUserInfo(jwt: string, id: number) {
    return axiosUtil.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  }
}

export default StrapiUtil;
