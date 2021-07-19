import axios from "axios";
import { env } from "../../env/DotEnv";

class StrapiUtil {
  /**
   * create account
   * @param {string} username
   * @param {string} email
   * @param {string} password
   */
  public static createAccount(username: string, email: string, password: string) {
    return axios.post(`${env.getStrapiUrl()}/auth/local/register`, {
      username,
      email,
      password,
    });
  }
}

export default StrapiUtil;
