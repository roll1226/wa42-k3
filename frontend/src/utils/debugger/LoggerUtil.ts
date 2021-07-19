/**
 * 開発環境のみにlogを表示
 *
 */
export default class LoggerUtil {
  public static debug(message?: any, ...optionalParams: any[]) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log(message, optionalParams);
    }
  }
}
