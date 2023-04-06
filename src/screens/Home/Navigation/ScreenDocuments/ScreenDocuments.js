import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Toolbar from "../../../../components/Toolbar";
import COLORS from "../../../../assets/colors/COLORS";
import ButtonAdd from "../../../../components/ButtonAdd";
import FloatingButton from "../../../../components/FloatingButton";
import ListCustomers from "../ScreenCustomers/ListCustomers";

export default function ScreenDocuments() {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: COLORS.bg, flex:1 , position:"relative"}}>
         <Toolbar
        title="Chứng Từ"
        iconOne="arrow-back-circle"
        iconTwo="search"
        iconThree="ellipsis-v"
        clickGoBack={() => navigation.goBack()}
      /><FloatingButton navigation={navigation}/>
    </View>
  );
}
