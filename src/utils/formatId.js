const formatIDDocuments = (id) => {
  const idLength = String(id).length; // độ dài hiện tại của số id
  const digitCount = 6 - idLength; // số lượng ký tự filler cần thêm vào
  const filler = "0".repeat(digitCount); // chuỗi filler
  const formattedId = `${filler}${id}`; // id đã được định dạng

  return formattedId;
};
export default formatIDDocuments;
