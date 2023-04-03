//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../assets/colors/COLORS";
import { TouchableOpacity } from "react-native-gesture-handler";

// create a component
const ModalMenu = (props) => {
  const {
    itemSort,
    itemPrintExcel,
    itemListSetting,
    itemShowQuantity,
    itemHideGroup,
    itemHelp,
  } = props;
  return props.activeModal ? (
    <View style={styles.container}>
      <View style={styles.menuItem}>
        {itemSort && (
          <View style={styles.item}>
            <FontAwesome name={props.itemSort} size={15} color="#4F5868" />
            <Text style={styles.text}> Xắp sếp</Text>
          </View>
        )}
        {itemPrintExcel && (
          <View style={styles.item}>
            <FontAwesome name={itemPrintExcel} size={15} color="#4F5868" />
            <Text style={styles.text}> Xuất File Excel</Text>
          </View>
        )}
        {itemListSetting && (
          <View style={styles.item}>
            <FontAwesome name={itemListSetting} size={15} color="#4F5868" />
            <Text style={styles.text}> Cài Đặt</Text>
          </View>
        )}
        {itemShowQuantity && (
          <View style={styles.item}>
            <Ionicons name={itemShowQuantity} size={15} color="#4F5868" />
            <Text style={styles.text}> Xem số lượng</Text>
          </View>
        )}
        {itemHideGroup && (
          <View style={styles.item}>
            <FontAwesome name={itemHideGroup} size={15} color="#4F5868" />
            <Text style={styles.text}> Ẩn nhóm sản phẩm</Text>
          </View>
        )}
        {itemHelp && (
          <View style={styles.item}>
            <FontAwesome name={itemHelp} size={15} color="#4F5868" />
            <Text style={styles.text}> Trợ giúp</Text>
          </View>
        )}
      </View>
    </View>
  ) : null;
};

// define your styles
const styles = StyleSheet.create({
  parent: {
    position: "relative",
    borderWidth: 1,
    flex: 1,
    top: "-45%",
    zIndex: 20,
    right: 0,
    left: 0,
  },
  container: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 13,
    elevation: 10,
    right: 23,
    top: 67,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  menuItem: {
    justifyContent: "center",
  },
  item: {
    flexDirection: "row",

    alignItems: "center",
    paddingVertical: 12,
  },
  text: {
    fontSize: 12,
    paddingLeft: 5,
    color: "#001E4E",
  },
});

//make this component available to the app
export default ModalMenu;
