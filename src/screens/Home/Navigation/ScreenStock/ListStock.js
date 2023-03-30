import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import COLORS from "../../../../assets/colors/COLORS";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ListStock() {
  return (
    <View>
      <ItemStock />
      <ItemStock />
    </View>
  );
}
const ItemStock = () => (
  <TouchableOpacity style={styles.rowStock}>
    <View style={styles.leftRow}>
      <View
        style={{
          width: 38,
          height: 38,
          borderRadius: 100,
          backgroundColor: COLORS.secondary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../../../../assets/images/store.png")}
        ></Image>
      </View>
      <Text style={{ paddingHorizontal: 10, fontWeight: "500" }}>
        Kho Hang Binh Thanh
      </Text>
    </View>
    <View style={styles.rightRow}>
      <Text style={{ paddingHorizontal: 10, fontWeight: "500" }}>627.00</Text>
      <TouchableOpacity style={{ paddingTop: 1 }}>
        <Ionicons name="ellipsis-vertical" size={17} color="gray"></Ionicons>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  rowStock: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: COLORS.bg,
    justifyContent: "space-between",
    borderBottomWidth: 0.6,
    borderColor: "#E3E3E3",
  },
  leftRow: { flexDirection: "row", alignItems: "center" },
  rightRow: { flexDirection: "row", alignItems: "center" },
});
