import React from "react";
import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SPACING from "../assets/dimens/SPACING";
import COLOR from "../assets/colors/COLORS";

export default Header = () => {
  return (
    <View
      style={{
        backgroundColor: COLOR.primary,
        justifyContent: "center",
        marginTop: Platform.OS === "android" ? 0 : 0,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome
            name="bars"
            size={SPACING * 2.3}
            color="white"
          ></FontAwesome>
          <Text
            style={{
              fontWeight: "500",
              color: COLOR.white,
              fontSize: SPACING * 2,
              marginStart: 15,
            }}
          >
            Stock Manager
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome
            name="file-text"
            size={SPACING * 2}
            color={COLOR.white}
          ></FontAwesome>
          <FontAwesome
            style={{ marginLeft: 25 }}
            name="info-circle"
            size={SPACING * 2.1}
            color={COLOR.white}
          ></FontAwesome>
        </View>
      </View>
    </View>
  );
};
