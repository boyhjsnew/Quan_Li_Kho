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
        <ListReport title="Danh sách nhập/xuất" />
        <ListReport title="Lịch sử giao dịch" />
        <ListReport />
      </View>
    </View>
  );
}
const ListReport = (props) => {
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
      <Text
        style={{
          fontWeight: "600",
          paddingBottom: 20,
          paddingTop: 5,
          fontSize: 15,
        }}
      >
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
        <FontAwesome color={"#4F5868"} name="file" size={18}></FontAwesome>
        <FontAwesome color={"#4F5868"} name="angle-right" size={25} />
      </View>
    </TouchableOpacity>
  );
};
