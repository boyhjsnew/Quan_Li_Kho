import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as XLSX from "xlsx";

const shareFileExcel = async (suppliers) => {
  const header = [
    "ID",
    "Tên NCC",
    "Địa chỉ",
    "Ngân hàng",
    "Email",
    "SĐT",
    "taxID",
    "Ghi chú",
  ];
  const data = [
    header,
    ...suppliers.map((supplier, index) => [
      index,
      supplier.name,
      supplier.address,
      supplier.bankdetail,
      supplier.email,
      supplier.phone,
      supplier.taxID,
      supplier.notes,
    ]),
  ];

  const ws = XLSX.utils.aoa_to_sheet(data);
  // đặt màu nền cho cột tiêu đề

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Suppliers");
  const wbout = XLSX.write(wb, { type: "base64", bookType: "xlsx" });

  const now = new Date();
  const day = ("0" + now.getDate()).slice(-2);
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const year = now.getFullYear();
  const fileName = `suppliers-${day}-${month}-${year}.xlsx`;

  try {
    const fileUri = FileSystem.documentDirectory + fileName;
    await FileSystem.writeAsStringAsync(fileUri, wbout, {
      encoding: FileSystem.EncodingType.Base64,
    });
    await Sharing.shareAsync(fileUri);
    console.log("File saved successfully.");
  } catch (error) {
    console.log(error);
  }
};

const shareFileExcelCustomers = async (customers) => {
  const header = [
    "ID",
    "Tên NCC",
    "Địa chỉ",
    "Ngân hàng",
    "Email",
    "SĐT",
    "taxID",
    "Ghi chú",
  ];
  const data = [
    header,
    ...customers.map((customer, index) => [
      index,
      customer.name,
      customer.address,
      customer.bankdetail,
      customer.email,
      customer.phone,
      customer.taxID,
      customer.discount,
      customer.notes,
    ]),
  ];

  const ws = XLSX.utils.aoa_to_sheet(data);
  // đặt màu nền cho cột tiêu đề

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Customers");
  const wbout = XLSX.write(wb, { type: "base64", bookType: "xlsx" });

  const now = new Date();
  const day = ("0" + now.getDate()).slice(-2);
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const year = now.getFullYear();
  const fileName = `customers-${day}-${month}-${year}.xlsx`;

  try {
    const fileUri = FileSystem.documentDirectory + fileName;
    await FileSystem.writeAsStringAsync(fileUri, wbout, {
      encoding: FileSystem.EncodingType.Base64,
    });
    await Sharing.shareAsync(fileUri);
    console.log("File saved successfully.");
  } catch (error) {
    console.log(error);
  }
};

export { shareFileExcel, shareFileExcelCustomers };
