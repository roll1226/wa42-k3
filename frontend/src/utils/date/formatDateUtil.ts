import { format, isAfter } from "date-fns";

class formatDateUtil {
  /**
   * 日付フォーマット
   * @param {string | Date} date [日付]
   * @return {string} [yyyy年MM月dd日]
   */
  public static formatDate(date: string | Date): string {
    return format(new Date(date), "yyyy年MM月dd日");
  }

  /**
   *
   * @param {string | Date} beforeDate
   * @param {string | Date} afterDate
   * @return {boolean} [beforeDateがafterDateより後か否か]
   */
  public static compareDateAfter(
    beforeDate: string | Date,
    afterDate: string | Date
  ): boolean {
    return isAfter(new Date(beforeDate), new Date(afterDate));
  }
}

export default formatDateUtil;
