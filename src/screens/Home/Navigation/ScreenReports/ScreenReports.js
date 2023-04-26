import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Toolbar from "../../../../components/Toolbar";
import HeaderNameStore from "../../../../components/HeaderNameStore";
import COLORS from "../../../../assets/colors/COLORS";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";

export default function ScreenReports({ navigation }) {
  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1 }}>
      <Toolbar
        iconOne="arrow-back-circle"
        title="Báo Cáo"
        clickGoBack={() => navigation.goBack()}
        itemThreeClick={() => navigation.goBack()}
      />
      <HeaderNameStore />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <ListReport title="Số lượng theo kho" />
        <ListReport />
        <ListReport />
        <ListReport />
      </View>
    </View>
  );
}
const ListReport = (props) => {
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
  console.log(getProductQuantity());
  const width = Dimensions.get("window").width;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("table", {
          namereport: props.title,
        })
      }
      style={{
        width: width / 2 - 27,
        backgroundColor: "white",
        elevation: 2,
        paddingHorizontal: 10,
        paddingTop: 8,
        borderRadius: 8,
        margin: 8,
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontWeight: "700", paddingBottom: 25 }}>
        {props.title}
      </Text>
      <View
        style={{
          height: 1,
          backgroundColor: "gray",
          opacity: 0.4,
          marginTop: 10,
        }}
      ></View>
      <View
        style={{
          paddingVertical: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FontAwesome name="file" size={18}></FontAwesome>
        <FontAwesome name="angle-right" size={25} />
      </View>
    </TouchableOpacity>
  );
};
