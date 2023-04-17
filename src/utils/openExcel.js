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

  // Đặt màu nền cho cột tiêu đề
  ws["!cols"] = [
    { width: 5 },
    { width: 20 },
    { width: 30 },
    { width: 20 },
    { width: 20 },
    { width: 15 },
    { width: 20 },
    { width: 30 },
  ];

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Suppliers");
  const wbout = XLSX.write(wb, { type: "base64", bookType: "xlsx" });

  const now = new Date();
  const day = ("0" + now.getDate()).slice(-2);
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const year = now.getFullYear();
  const fileName = `suppliers-${day}-${month}-${year}.xlsx`;
  const directoryName = "QuanLiKho";

  try {
    // Tạo thư mục "QuanLiKho"
    const dirUri = FileSystem.documentDirectory + directoryName;
    await FileSystem.makeDirectoryAsync(dirUri, { intermediates: true });

    // Lưu file Excel vào thư mục "QuanLiKho"
    const fileUri = `${dirUri}/${fileName}`;
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
