import React from "react";
import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SPACING from "../assets/dimens/SPACING";
import COLOR from "../assets/colors/COLORS";

export default Header = (props) => {
  const { title, icon_one, icontwo, iconthree } = props;
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
          {iconMenu && (
            <FontAwesome
              name={iconMenu} // bars
              size={SPACING * 2.3}
              color="white"
            ></FontAwesome>
          )}
          <Text
            style={{
              fontWeight: "500",
              color: COLOR.white,
              fontSize: SPACING * 2,
              marginStart: 15,
            }}
          >
            {title}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {icon_one && (
            <FontAwesome
              style={{ marginLeft: 25 }}
              name={icon_one} //info-circle
              size={SPACING * 2.1}
              color={COLOR.white}
            ></FontAwesome>
          )}
          {iconSearch && (
            <TouchableOpacity>
              <Image
                source={iconSearch} //require("../assets/images/search.png")
                style={{ width: 20, height: 20 }}
              ></Image>
            </TouchableOpacity>
          )}
          {iconSort && (
            <TouchableOpacity>
              <FontAwesome
                name={iconSort} //sort-amount-asc
                size={17}
                color="white"
                style={{ paddingHorizontal: SPACING * 2 }}
              ></FontAwesome>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
