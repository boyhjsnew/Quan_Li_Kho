import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import COLORS from "../assets/colors/COLORS";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

const width = Dimensions.get("screen").width;
const ModalBottomExcel = (props) => {
  const tonggleModal = () => {
    props.setActiveModalExcel(!props.activeModalExcel);
  };
  return (
    <Modal
      transparent={true}
      animationType="fade"
      isVisible={props.activeModalExcel}
      onSwipeComplete={tonggleModal}
      swipeDirection="down"
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      backdropOpacity={0.5}
      onBackdropPress={() => props.setActiveModalExcel(false)}
      onBackButtonPress={() => props.setActiveModalExcel(false)}
      animationInTiming={900}
      animationOutTiming={500}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={700}
    >
      <View style={styles.modalbottom}>
        <View style={{ alignItems: "center", paddingVertical: 5 }}>
          <View style={styles.btnSwipe}></View>
        </View>
        <TouchableOpacity
          style={styles.itemBottomMadal}
          onPress={props.openExcel}
        >
          <FontAwesome name="file-excel-o" size={20} color="#293855" />
          <Text style={{ color: "#293855", paddingHorizontal: 15 }}>
            Mở File Excel
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemBottomMadal}
          onPress={props.shareExcel}
        >
          <FontAwesome name="share" size={20} color="#293855" />
          <Text style={{ color: "#293855", paddingHorizontal: 15 }}>
            Chia Sẻ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemBottomMadal}
          onPress={props.saveExcel}
        >
          <FontAwesome name="save" size={20} color="#293855" />
          <Text style={{ color: "#293855", paddingHorizontal: 15 }}>
            Lưu vào máy
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalbottom: {
    width: width,
    backgroundColor: "white",
    position: "absolute",
    bottom: -20,
    alignSelf: "center",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 15,
  },
  btnSwipe: {
    height: 6,
    alignItems: "center",
    width: 60,
    backgroundColor: "#B7CCFF",
    borderRadius: 10,
  },
  itemBottomMadal: {
    flexDirection: "row",

    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#F4F4F6",
  },
});
export default ModalBottomExcel;
