import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Toolbar from "../../../../components/Toolbar";
import COLORS from "../../../../assets/colors/COLORS";
import ButtonAdd from "../../../../components/ButtonAdd";

export default function ScreenDocuments() {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1 }}>
      <Toolbar
        title="Chứng Từ"
        iconOne="arrow-back-circle"
        iconTwo="search"
        iconThree="ellipsis-v"
      />
      <ButtonAdd />
    </View>
  );
}
