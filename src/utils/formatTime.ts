import dayjs from "dayjs";

export const formatUnixTime = (unixTime: number, formatType?: string) => {
  if (formatType === "date") return dayjs.unix(unixTime).format("MM/DD");
  return dayjs.unix(unixTime).format("h:mm A");
};
