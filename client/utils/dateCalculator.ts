import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function dateCalculator(createdAt: Date) {
  const createdDay = dayjs(createdAt).format("YYYY-MM-DD");
  const today = dayjs(new Date()).format("YYYY-MM-DD");
  const dayDiff = dayjs(today).diff(createdDay, "day");
  if (dayDiff > 0) {
    return createdDay;
  } else {
    return dayjs(createdAt).fromNow();
  }
}
