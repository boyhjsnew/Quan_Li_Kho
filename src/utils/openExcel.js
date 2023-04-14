import XLSX from "xlsx";
import { useSelector } from "react-redux";
import RNBlobUtil from "react-native-blob-util";
import RNFetchBlob from "react-native-fetch-blob";

const handleOpenExcel = () => {
  const suppliers = useSelector((state) => state.supplierReducer.items); // Lấy danh sách nhà cung cấp từ state của Redux

  // Tạo một file Excel mới
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(suppliers);
  XLSX.utils.book_append_sheet(wb, ws, "Suppliers");
  const wbout = XLSX.write(wb, { type: "base64", bookType: "xlsx" });

  // Lưu file Excel vào thiết bị
  const path = `${RNFetchBlob.fs.dirs.DownloadDir}/suppliers.xlsx`;

  RNBlobUtil.fs
    .writeFile(path, wbout, "base64")
    .then(() => {
      // Mở file Excel vừa tạo
      RNFetchBlob.android.actionViewIntent(
        path,
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
    })
    .catch((error) => {
      console.error(error);
    });
};

export default handleOpenExcel;
