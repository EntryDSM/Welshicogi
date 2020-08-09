import { firstSeatChecker } from "../date";

export function convert1dArrayTo2dArray<T>(
  array: Array<T>,
  sliceLength: number
) {
  const newArr = [];
  while (array.length) newArr.push(array.splice(0, sliceLength));
  return newArr;
}

export function convertTimeStempToSentence(timeStemp: string) {
  const date = timeStemp.split("T")[0].split("-");
  const time = timeStemp.split("T")[1].split(".")[0].split(":");

  return `${date[0]}년${date[1]}월${date[2]}일 ${time[0]}시${time[1]}분`;
}

export function convertTimeStempToNowDate(timeStemp: string) {
  const now = new Date();
  const date = timeStemp.split("T")[0].split("-");
  const time = timeStemp.split("T")[1].split(".")[0].split(":");
  const newDate = `${date[1]}월${date[2]}일`;
  let newTime = "";

  if (Number(time[0]) > 12) {
    newTime = `오후 ${firstSeatChecker(Number(time[0]) - 12)}:${time[1]}`;
  } else {
    newTime = `오전 ${time[0]}:${time[1]}`;
  }

  if (now.getDate() === Number(date[2])) {
    return newTime;
  }

  return newDate;
}

export const encodingEmail = (email: string) => email.split(".").join("^");
export const decodingEmail = (email: string) => email.split("^").join(".");
