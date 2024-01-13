export function formateNumber(number) {
  return new Intl.NumberFormat().format(number);
}
