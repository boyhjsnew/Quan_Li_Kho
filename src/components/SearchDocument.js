import { View, Text, Image, TextInput } from "react-native";
import React from "react";

import COLORS from "../assets/colors/COLORS";
import { TouchableOpacity } from "react-native";

export default function SearchDocument() {
  return (
    <View
      style={{
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor:COLORS.primary
      }}
    >
      <TextInput
        placeholder="Tìm kiếm"
        style={{
          width: "89%",
          height: 43,
          borderWidth: 1,
          borderColor: "#D3D3D3",
          borderRadius: 10,
          backgroundColor: COLORS.white,
          paddingHorizontal: 10,
        }}
      ></TextInput>
      <View>
        <TouchableOpacity>
          <Image
            style={{ width: 20, height: 30, tintColor: COLORS.white }}
            source={require("../assets/images/icons8-dot-64.png")}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}