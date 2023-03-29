import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../../componets/Header";
import color from "../Home/../../assets/colors/COLORS";
import img from "../Home/../../assets/images/arrow.png";
import imgStore from "../Home/../../assets/images/store.png";
import imgbox from "../Home/../../assets/images/box.png";
import spacing from "../../assets/dimens/SPACING";
import Toolbar from "../../componets/ContentHeader";
import ContentHeader from "../../componets/ContentHeader";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ width: "100%", backgroundColor: color.primary, padding: 10 }}>
        <Header/>
        <ContentHeader/>
        
      </View>
    </View>
  );
}
