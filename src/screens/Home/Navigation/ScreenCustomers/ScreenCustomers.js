import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toolbar from "../../../../components/Toolbar";
import COLORS from "../../../../assets/colors/COLORS";
import ButtonAdd from "../../../../components/ButtonAdd";
export default function ScreenCustomers() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1 }}>
      <Toolbar
        title="Khách Hàng"
        iconOne="arrow-back-circle"
        iconTwo="search"
        iconThree="ellipsis-v"
      />
      <ButtonAdd />
    </View>
  );
}
