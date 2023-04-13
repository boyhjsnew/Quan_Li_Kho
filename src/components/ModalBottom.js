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
const ModalBottom = (props) => {
  const tonggleModal = () => {
    props.setActiveBottomModal(!props.activeBottomModal);
  };
  return (
    <Modal
      transparent={true}
      animationType="fade"
      isVisible={props.activeBottomModal}
      onSwipeComplete={tonggleModal}
      swipeDirection="down"
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      backdropOpacity={0.5}
      onBackdropPress={() => props.setActiveBottomModal(false)}
      onBackButtonPress={() => props.setActiveBottomModal(false)}
      animationInTiming={900}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={1000}
    >
      <View style={styles.modalbottom}>
        <View style={{ alignItems: "center", paddingVertical: 5 }}>
          <View style={styles.btnSwipe}></View>
        </View>
        <TouchableOpacity style={styles.itemBottomMadal}>
          <FontAwesome name="history" size={20} color="#293855" />
          <Text style={{ color: "#293855", paddingHorizontal: 15 }}>
            Xem Giao Dịch
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemBottomMadal}>
          <FontAwesome name="mail-reply" size={20} color="#293855" />
          <Text style={{ color: "#293855", paddingHorizontal: 15 }}>
            Gửi Email
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemBottomMadal}>
          <FontAwesome name="send" size={20} color="#293855" />
          <Text style={{ color: "#293855", paddingHorizontal: 15 }}>
            Gửi SMS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemBottomMadal}>
          <FontAwesome name="phone" size={20} color="#293855" />
          <Text style={{ color: "#293855", paddingHorizontal: 15 }}>
            Phone Call
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemBottomMadal}>
          <Ionicons name="logo-whatsapp" size={20} color="#293855" />
          <Text style={{ color: "#293855", paddingHorizontal: 15 }}>Zalo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemBottomMadal}
          onPress={props.deleteItem}
        >
          <Ionicons name="person-remove" size={20} color="#CB0A0A" />
          <Text style={{ color: "#CB0A0A", paddingHorizontal: 15 }}>Xoá</Text>
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
export default ModalBottom;
