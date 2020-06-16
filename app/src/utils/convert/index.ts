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
