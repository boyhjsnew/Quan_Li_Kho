import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Toolbar from "../../../../components/Toolbar";

export default function ScreenIncoming() {
  const navigation = useNavigation();
  return (
    <View>
      <Toolbar title="Incoming No(00000010)" />
    </View>
  );
}
