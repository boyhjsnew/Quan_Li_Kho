export default formatCurrency = (value) => {
  const newPrice = value.replace(/\D+/g, "");
  const formattedPrice = Number(newPrice).toLocaleString("vi-VN");
  return formattedPrice;
};
