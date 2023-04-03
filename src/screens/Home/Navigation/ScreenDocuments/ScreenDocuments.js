import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Toolbar from "../../../../components/Toolbar";

export default function ScreenDocuments() {
  const navigation = useNavigation();
  return (
    <Toolbar
      title="Chứng Từ"
      iconOne="arrow-back-circle"
      iconTwo="search"
      iconThree="ellipsis-v"
    />
  );
}
