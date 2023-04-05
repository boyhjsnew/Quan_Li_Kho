import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Toolbar from "../../../../components/Toolbar";
import ListStock from "./ListStock";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../../../../assets/colors/COLORS";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ScreenStock() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <Toolbar
        title="Quản Lý Kho"
        iconOne="arrow-back-circle"
        iconTwo="search"
        clickGoBack={() => navigation.goBack()}
      />
      <ListStock />
      <TouchableOpacity style={styles.btnAdd}>
        <Ionicons name="add-sharp" size={35} color="white"></Ionicons>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  btnAdd: {
    elevation: 8,
    position: "absolute",
    height: 50,
    width: 50,
    borderRadius: 35,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    bottom: 15,
    right: 15,
  },
});
