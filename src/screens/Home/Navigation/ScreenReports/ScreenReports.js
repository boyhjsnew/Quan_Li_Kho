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

export default function ScreenReports() {
  const navigation = useNavigation();

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
        <ListReport />
        <ListReport />
        <ListReport />
        <ListReport />
      </View>
    </View>
  );
}
const ListReport = () => {
  const width = Dimensions.get("window").width;
  return (
    <View
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
        Báo cáo bán hàng theo ngày
      </Text>
      <View
        style={{
          height: 1,
          backgroundColor: "gray",
          opacity: 0.4,
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
    </View>
  );
};
