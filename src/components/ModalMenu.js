//import liraries
import React, { Component, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../assets/colors/COLORS";
import Modal from "react-native-modal";

// create a component
const ModalMenu = (props) => {
  const {
    itemSort,
    itemPrintExcel,
    itemListSetting,
    itemShowQuantity,
    itemHideGroup,
    itemHelp,
    itemDelete,
  } = props;
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={props.activeModal}
      onBackdropPress={() => props.setActiveModal(false)}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.menuItem}>
          {itemSort && (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                alert("hello");
                props.setActiveModal(false);
              }}
            >
              <FontAwesome name={props.itemSort} size={15} color="#4F5868" />
              <Text style={styles.text}> Xắp Xếp</Text>
            </TouchableOpacity>
          )}
          {itemPrintExcel && (
            <TouchableOpacity style={styles.item}>
              <FontAwesome name={itemPrintExcel} size={15} color="#4F5868" />
              <Text style={styles.text}> Xuất File Excel</Text>
            </TouchableOpacity>
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
              <Text style={styles.text}> Xem Số Lượng</Text>
            </View>
          )}
          {itemHideGroup && (
            <View style={styles.item}>
              <FontAwesome name={itemHideGroup} size={15} color="#4F5868" />
              <Text style={styles.text}> Ẩn Nhóm Sản Phẩm</Text>
            </View>
          )}
          {itemHelp && (
            <View style={styles.item}>
              <FontAwesome name={itemHelp} size={15} color="#4F5868" />
              <Text style={styles.text}> Trợ Giúp</Text>
            </View>
          )}
          {itemDelete && (
            <View style={styles.item}>
              <FontAwesome name={itemDelete} size={15} color="#4F5868" />
              <Text style={styles.text}>Xoá bỏ</Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 13,
    elevation: 10,
    right: 0,
    top: Platform.OS === "ios" ? 100 : 27,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  menuItem: {
    justifyContent: "center",
  },
  item: {
    flexDirection: "row",
    paddingRight: 5,
    alignItems: "center",
    paddingVertical: 12,
  },
  text: {
    fontSize: 13,
    paddingLeft: 8,
    color: "#001E4E",
  },
});

//make this component available to the app
export default ModalMenu;
