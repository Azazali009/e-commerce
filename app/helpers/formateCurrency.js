export function formateCurrency(currency) {
  const formateCurrency = currency?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formateCurrency;
}
