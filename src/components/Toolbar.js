import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../assets/colors/COLORS";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import SPACING from "../assets/dimens/SPACING";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function Toolbar() {
  const { header, header_back, header_menu } = styles;
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.primary,
        paddingTop: Platform.OS === "android" ? 23 : 0,
      }}
    >
      <View style={header}>
        {/* view back */}
        <View style={header_back}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-circle"
              color={COLORS.white}
              size={30}
            ></Ionicons>
          </TouchableOpacity>

          <Text
            style={{
              paddingLeft: SPACING,
              fontSize: 17,
              fontWeight: "500",
              color: "white",
            }}
          >
            Quản Lý Kho
          </Text>
        </View>
        {/* view menu */}
        <View style={header_menu}>
          <Image
            source={require("../assets/images/search.png")}
            style={{ width: 20, height: 20 }}
          ></Image>
          <FontAwesome
            name="sort-amount-asc"
            size={17}
            color="white"
            style={{ paddingHorizontal: SPACING * 2 }}
          ></FontAwesome>
          <Ionicons
            name="information-circle"
            size={25}
            color="white"
          ></Ionicons>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: SPACING + 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header_back: {
    flexDirection: "row",
    alignItems: "center",
  },
  header_menu: {
    flexDirection: "row",
    alignItems: "center",
  },
});
