import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import Toolbar from "../../../../components/Toolbar";
import HeaderNameStore from "../../../../components/HeaderNameStore";
import COLORS from "../../../../assets/colors/COLORS";
import { color } from "react-native-elements/dist/helpers";
import { useSelector } from "react-redux";

export default function TableReport({ navigation, route }) {
  const namereport = route.params.namereport;
  const documents = useSelector((state) => state.documentsReducer.items);

  function getProductQuantity() {
    // sử dụng reduce để tính tổng số lượng của từng kho
    const storeQuantities = documents.reduce((acc, curr) => {
      const idStore = curr.idStore;
      const quantity = (curr.QuaInStock || 0) - (curr.QuaOutStock || 0); // tính toán số lượng còn lại của từng kho

      if (acc[idStore]) {
        acc[idStore].quantity += quantity; // nếu đã có kho trong mảng thì cộng thêm số lượng mới vào
      } else {
        acc[idStore] = { idStore, quantity }; // nếu chưa có thì tạo mới một kho với số lượng ban đầu
      }

      return acc;
    }, {});

    // chuyển đổi kết quả từ object sang array và trả về
    return Object.values(storeQuantities);
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <Toolbar
        iconOne="arrow-back-circle"
        iconTwo="file-excel-o"
        iconThree="file-pdf-o"
        title={namereport}
        clickGoBack={() => navigation.goBack()}
        itemThreeClick={() => navigation.goBack()}
      />
      <HeaderNameStore />
      <PeriodTime />
      {namereport === "Số lượng theo kho" && (
        <TableStore getProductQuantity={getProductQuantity} />
      )}
      <TableHistory />
    </View>
  );
}
const PeriodTime = () => {
  let newYear = new Date(2023, 0, 1); // Ngày 1 tháng 1 năm 2023
  let lastDay = new Date(2023, 11, 31); // Ngày 31 tháng 12 năm 2024
  return (
    <View style={styles.header}>
      <Image
        style={{ width: 20, height: 20, opacity: 0.7 }}
        source={require("././././../../../.././assets/images/schedule.png")}
      ></Image>
      <Text
        style={{
          paddingLeft: 15,
          color: "white",
          opacity: 0.7,
        }}
      >
        Thời gian từ{" "}
        {`${newYear.getDate()}/${
          newYear.getMonth() + 1
        }/${newYear.getFullYear()} đến ${lastDay.getDate()}/${
          lastDay.getMonth() + 1
        }/${lastDay.getFullYear()}`}
      </Text>
    </View>
  );
};

const TableStore = (props) => {
  const { getProductQuantity } = props;
  const listStore = getProductQuantity();
  const getStore = useSelector((state) => state.warehouseReducer.items);
  const getStoreName = (idStore) => {
    const store = getStore.find((item) => item.id === idStore);
    return store.name;
  };
  const renderRow = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.cell}>{getStoreName(item.idStore)}</Text>
        <Text style={styles.cell}>{item.quantity}</Text>
      </View>
    );
  };
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.headerCell}>Tên kho</Text>
        <Text style={styles.headerCell}>Số lượng</Text>
      </View>
      <FlatList
        data={listStore}
        renderItem={renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.row}>
        <Text style={styles.headerCell}>Tổng cộng :</Text>
        <Text style={styles.headerCell}>
          {getProductQuantity().reduce((acc, curr) => {
            return (acc += curr.quantity);
          }, 0)}
        </Text>
      </View>
    </View>
  );
};

const TableHistory = () => {
  const listDoc = useSelector((state) => state.documentsReducer.items);
  const listCus = useSelector((state) => state.customersReducer.items);
  const listSup = useSelector((state) => state.supplierReducer.items);

  const getNameCus = (idCus) => {
    const Cus = listCus.find((item) => item.id === idCus);
    return Cus.name;
  };
  const getNameSup = (idSup) => {
    const Sup = listSup.find((item) => item.id === idSup);
    return Sup.name;
  };

  const getQuantity = () => {
    const Doc = listDoc.filter((item) => item);

    const totalQuaInStock = Doc.reduce(
      (acc, curr) => acc + (curr.QuaInStock || 0),
      0
    );
    const totalQuaOutStock = Doc.reduce(
      (acc, curr) => acc + (curr.QuaOutStock || 0),
      0
    );

    return totalQuaInStock + totalQuaOutStock;
  };
  console.log(getQuantity());
  return (
    <ScrollView horizontal style={{ margin: 10 }}>
      <View style={styles.scrollViewContainer}>
        <View style={styles.row}>
          <Text style={[styles.headerCell, styles.fixedWidth]}>Ngày</Text>
          <Text style={[styles.headerCell, styles.fixedWidth]}>Số phiếu</Text>
          <Text style={[styles.headerCell, styles.fixedWidth]}>Ghi chú</Text>
          <Text style={[styles.headerCell, styles.fixedWidth]}>Loại phiếu</Text>
          <Text style={[styles.headerCell, styles.fixedWidth]}>
            Khách hàng/Nhà cung cấp
          </Text>
          <Text style={[styles.headerCell, styles.fixedWidth]}>Số lượng</Text>
        </View>
        {listDoc.map((item) => {
          return (
            <View style={styles.row}>
              <Text style={[styles.cell, styles.fixedWidth]}>
                {item.createAt}
              </Text>
              <Text style={[styles.cell, styles.fixedWidth]}>{item.id}</Text>
              <Text style={[styles.cell, styles.fixedWidth]}>{item.notes}</Text>
              <Text style={[styles.cell, styles.fixedWidth]}>
                {item.typeDocument == "instock" ? "Phiếu xuất" : "Phiếu nhập"}
              </Text>
              <Text style={[styles.cell, styles.fixedWidth]}>
                {item.idCustomer == "null"
                  ? getNameSup(item.idSupplier)
                  : getNameCus(item.idCustomer)}
              </Text>
              <Text style={[styles.cell, styles.fixedWidth]}>
                {item.typeDocument == "instock"
                  ? item.QuaInStock
                  : item.QuaOutStock}
              </Text>
            </View>
          );
        })}
        <View style={styles.row}>
          <Text style={[styles.headerCell, styles.fixedWidth]}></Text>
          <Text style={[styles.headerCell, styles.fixedWidth]}></Text>
          <Text style={[styles.headerCell, styles.fixedWidth]}></Text>
          <Text style={[styles.headerCell, styles.fixedWidth]}></Text>
          <Text style={[styles.headerCell, styles.fixedWidth]}>
            {" "}
            Tổng cộng :
          </Text>
          <Text style={[styles.headerCell, styles.fixedWidth]}>
            {getQuantity()}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexDirection: "column",
  },
  table: {
    margin: 10,
  },
  row: {
    flexDirection: "row",
  },

  headerCell: {
    backgroundColor: COLORS.primary,
    padding: 5,
    fontWeight: "bold",
    flex: 1,
    borderWidth: 0.3,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
  },
  header: {
    paddingBottom: 10,
    flexDirection: "row",
    paddingTop: 10,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
  },
  cell: {
    textAlign: "center",
    padding: 5,
    flex: 1,
    borderWidth: 0.5,
  },
  fixedWidth: {
    width: 100,
  },
});
