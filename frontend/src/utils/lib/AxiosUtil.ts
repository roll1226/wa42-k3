import axios from "axios";
import { env } from "../../env/DotEnv";

const axiosUtil = axios.create({
  baseURL: env.getStrapiUrl(),
  // headers: {
  //   "X-Requested-With": "XMLHttpRequest",
  // },
  // withCredentials: true,
});

export default axiosUtil;
