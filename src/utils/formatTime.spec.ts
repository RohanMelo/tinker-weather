import { formatUnixTime } from "./formatTime";

describe("Unix time to date", () => {
  const cases = [
    [1648579022, "03/29"],
    [1652639822, "05/15"],
    [1671993422, "12/25"],
  ];
  test.each(cases)(
    "given the unix time number %p, returns the date %p",
    (unixTime, expectedResult) => {
      // @ts-ignore
      const result = formatUnixTime(unixTime, "date");
      expect(result).toBe(expectedResult);
    }
  );
});

describe("Unix time to hh/mm A", () => {
  const cases = [
    [1648579022, "3:37 PM"],
    [1671955802, "5:10 AM"],
    [1671970322, "9:12 AM"],
  ];
  test.each(cases)(
    "given the unix time number %p, returns the hour %p",
    (unixTime, expectedResult) => {
      // @ts-ignore
      const result = formatUnixTime(unixTime);
      expect(result).toBe(expectedResult);
    }
  );
});
