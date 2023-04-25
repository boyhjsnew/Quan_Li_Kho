export default formatCurrency = (value) => {
  const formattedPrice = Number(value).toLocaleString("vi-VN");
  return formattedPrice;
};
