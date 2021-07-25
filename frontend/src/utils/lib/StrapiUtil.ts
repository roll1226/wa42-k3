import axiosUtil from "./AxiosUtil";
class StrapiUtil {
  /**
   * create account
   * @param {string} username [ユーザ名]
   * @param {string} email [メールアドレス]
   * @param {string} password [パスワード]
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
   * @param {string} identifier [メールアドレス]
   * @param {string} password [パスワード]
   */
  public static signInAccount(identifier: string, password: string) {
    return axiosUtil.post("/auth/local", {
      identifier,
      password,
    });
  }

  /**
   * upload file
   * @param {File} file [ファイル]
   * @param {string} jwt [jwt token]
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
   * @param {string} jwt [jwt token]
   */
  public static getMeUserInfo(jwt: string, id: number) {
    return axiosUtil.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  }

  /**
   * get posts
   */
  public static getPosts() {
    return axiosUtil.get("/posts?_sort=updated_at:desc");
  }

  /**
   * get post
   * @param {number} id [投稿ID]
   */
  public static getPost(id: number) {
    return axiosUtil.get(`/posts/${id}`);
  }

  public static postPost(
    jwt: string,
    title: string,
    body: string,
    userId: number
  ) {
    return axiosUtil.post(
      "/posts",
      {
        title,
        body,
        users_permissions_user: userId,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
  }
}

export default StrapiUtil;
