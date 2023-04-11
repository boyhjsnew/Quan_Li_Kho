import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import COLORS from "../assets/colors/COLORS";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export default function SearchSupplier() {
  return (
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }} >
        <TextInput
          placeholder="Tìm kiếm"
          style={{
            width: "100%",
            height: 43,
            borderRadius: 10,
            borderColor: "#D3D3D3",
            borderWidth: 1,
            backgroundColor: COLORS.white,
            paddingHorizontal: 10,
          }}
        />
      </View>
    
  );
}
