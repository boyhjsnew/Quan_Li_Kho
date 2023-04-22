import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

export default function ListDocuments() {
  const listDocument = useSelector((state) => state.documentsReducer.items);
  const listSup = useSelector((state) => state.supplierReducer.items);
  // Hàm lấy tên nhà cung cấp từ idSupplier
  const getSupplierName = (idSupplier) => {
    const supplier = listSup.find((supplier) => supplier.id === idSupplier);
    return supplier ? supplier.name : "";
  };
  return (
    <View>
      {listDocument && (
        <FlatList
          keyExtractor={(item) => item.idDoc}
          data={listDocument}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.rowDocuments} activeOpacity={0.8}>
                <View style={styles.infoTop}>
                  {/* infoTop 1 */}
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{
                        width: 14,
                        height: 14,
                        backgroundColor: item.typeDocument
                          ? "#12A751"
                          : "#FF67A1",
                        borderRadius: 100,
                      }}
                    ></View>
                    <Text style={{ fontWeight: "600", paddingHorizontal: 5 }}>
                      {`Đơn Xuất No.(${item.id})`}
                    </Text>
                  </View>
                  {/* infoTop 2 */}
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{ color: "gray", fontSize: 12, paddingRight: 8 }}
                    >
                      {item.createAt}
                    </Text>
                    <Image
                      style={{ width: 15, height: 15 }}
                      source={require("../../../../assets/images/bill.png")}
                    ></Image>
                  </View>
                </View>
                <View style={styles.infoBottom}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={{ width: 14, height: 14, marginRight: 8 }}
                      source={require("../../../../assets/images/hotel-supplier.png")}
                    ></Image>
                    <Text style={{ color: "gray", fontSize: 13 }}>
                      {getSupplierName(item.idSupplier)}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ paddingRight: 10, fontWeight: "700" }}>
                      {item.typeDocument == "instock"
                        ? item.QuaInStock
                        : item.QuaOutStock}
                    </Text>
                    <TouchableOpacity>
                      <View
                        style={{
                          height: 5,
                          width: 5,
                          backgroundColor: "gray",
                          borderRadius: 100,
                        }}
                      ></View>
                      <View
                        style={{
                          height: 5,
                          width: 5,
                          backgroundColor: "gray",
                          borderRadius: 100,
                          marginVertical: 3,
                        }}
                      ></View>
                      <View
                        style={{
                          height: 5,
                          width: 5,
                          backgroundColor: "gray",
                          borderRadius: 100,
                        }}
                      ></View>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  rowDocuments: {
    marginVertical: 5,
    backgroundColor: "white",
    padding: 8,
    paddingVertical: 10,
    elevation: 2,
  },
  infoTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoBottom: {
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginTop: 15,
    flexDirection: "row",
  },
});
