import { format } from "date-fns";

/**
 * 日付フォーマット
 * @param {string} date [日付]
 * @return {string} [yyyy年MM月dd日]
 */
export const formatDateUtil = (date: string): string => {
  return format(new Date(date), "yyyy.MM.dd");
};
