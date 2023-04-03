import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../../../../assets/colors/COLORS";

export default function ListSuppliers() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 12,
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.border,
            borderRadius: 19,
          }}
        ></View>
        <Text style={{ fontWeight: "700", paddingHorizontal: 10 }}>Pessi</Text>
      </View>
      <TouchableOpacity style={{ flexDirection: "row" }}>
        <Text
          style={{
            paddingHorizontal: 1,
            fontSize: 8,
            color: "#8E8D95",
          }}
        >
          {"\u2B24"}
        </Text>
        <Text
          style={{
            paddingHorizontal: 1,
            fontSize: 8,
            color: "#8E8D95",
          }}
        >
          {"\u2B24"}
        </Text>
        <Text
          style={{
            paddingHorizontal: 1,
            fontSize: 8,
            color: "#8E8D95",
          }}
        >
          {"\u2B24"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
