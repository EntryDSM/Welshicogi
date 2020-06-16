export function convert1dArrayTo2dArray<T>(
  array: Array<T>,
  sliceLength: number
) {
  const newArr = [];
  while (array.length) newArr.push(array.splice(0, sliceLength));
  return newArr;
}
