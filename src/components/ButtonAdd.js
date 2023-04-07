import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../assets/colors/COLORS";

export default function ButtonAdd(props) {
  return (
    <TouchableOpacity style={styles.btnAdd} onPress={props.clickAdd}>
      <Ionicons name="md-add" size={33} color={COLORS.white} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btnAdd: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
});
