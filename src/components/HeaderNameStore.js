import { View, Text, Image, StyleSheet } from "react-native";
import COLORS from "../assets/colors/COLORS";
import React from "react";
import { useSelector } from "react-redux";

export default function HeaderNameStore() {
  const nameStorePicked = useSelector((state) => state.warehouseReducer.items);
  return (
    <View style={styles.header}>
      <Image
        style={{ width: 20, height: 20, opacity: 0.7 }}
        source={require("../assets/images/store.png")}
      ></Image>
      <Text
        style={{
          paddingLeft: 15,
          color: "white",
          opacity: 0.7,
        }}
      >
        {nameStorePicked.map((item) => {
          if (item.isPicked) {
            return item.name;
          }
          return "";
        })}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingBottom: 10,
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
  },
});
