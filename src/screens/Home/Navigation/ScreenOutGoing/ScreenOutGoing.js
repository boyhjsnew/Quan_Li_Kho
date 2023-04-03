import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Toolbar from "../../../../components/Toolbar";

export default function ScreenOutGoing() {
  const navigation = useNavigation();
  return (
    <Toolbar
      title="Xuất Hàng"
      iconOne="arrow-back-circle"
      iconTwo="search"
      iconThree="ellipsis-v"
    />
  );
}
