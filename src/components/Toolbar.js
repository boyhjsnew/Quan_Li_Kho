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

export default function Toolbar(props) {
  const { header, header_back, header_menu } = styles;
  const navigation = useNavigation();

  // menu chon kho
  const ItemMenuSelectStore = () => (
    <View style={header_menu}>
      <TouchableOpacity>
        <Image
          source={require("../assets/images/search.png")}
          style={{ width: 20, height: 20 }}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome
          name="sort-amount-asc"
          size={17}
          color="white"
          style={{ paddingHorizontal: SPACING * 2 }}
        ></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="information-circle" size={25} color="white"></Ionicons>
      </TouchableOpacity>
    </View>
  );
  const ItemMenuSelectGood = () => (
    <View style={header_menu}>
      <TouchableOpacity>
        <Image
          source={require("../assets/images/search.png")}
          style={{ width: 20, height: 20 }}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          name="ellipsis-vertical"
          size={20}
          color="white"
          style={{ paddingLeft: SPACING * 2 }}
        ></Ionicons>
      </TouchableOpacity>
    </View>
  );
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
            {props.title}
          </Text>
        </View>

        {/* Item menu custom*/}
        {props.title == "Chọn Kho" ? (
          <ItemMenuSelectStore />
        ) : props.title == "Hàng hoá" ? (
          <ItemMenuSelectGood />
        ) : null}
        {/* view menu */}
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
