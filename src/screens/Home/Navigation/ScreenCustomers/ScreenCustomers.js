import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toolbar from "../../../../components/Toolbar";
export default function ScreenCustomers() {
  const navigation = useNavigation();
  return (
    <View>
      <Toolbar
        title="Khách Hàng"
        iconOne="arrow-back-circle"
        iconTwo="search"
        iconThree="ellipsis-v"
      />
    </View>
  );
}
