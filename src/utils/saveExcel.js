import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as XLSX from "xlsx";

const saveExcelFile = async (suppliers) => {
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
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Suppliers");
  const wbout = XLSX.write(wb, { type: "base64", bookType: "xlsx" });

  const fileName = `suppliers-${Date.now()}.xlsx`;

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

export default saveExcelFile;
