export function getOptions(arr, property) {
  let values = arr?.map((curItem) => curItem[property]);
  values = ["All", ...new Set(values)];
  return values;
}
