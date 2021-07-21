/**
 * Session util
 */
export default class SessionUtil {
  /**
   * set session
   *
   * @param {string} key
   * @param {string} value
   */
  public static setSession(key: string, value: any) {
    if (typeof value === "string") sessionStorage.setItem(key, value);
    else sessionStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * get session
   *
   * @param {string} key
   * @returns {string | null}
   */
  public static getSession(key: string): string | null {
    return sessionStorage.getItem(key);
  }
}
