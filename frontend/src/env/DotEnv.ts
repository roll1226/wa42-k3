export default class DotEnv {
  /**
   * get strapi url
   * @return {string} [strapi url]
   */
  public getStrapiUrl = (): string => {
    return process.env.STRAPI_URL as string;
  };
}

export const env = new DotEnv();
