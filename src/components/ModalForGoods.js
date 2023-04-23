import { View, Text } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
export default function ModalForGoods(props) {
  const { setModalGoods, yOffset, modalGoods } = props;
  const { width, height } = Dimensions.get("window");

  return (
    <Modal
      backdropOpacity={null}
      onBackdropPress={() => setModalGoods(false)}
      isVisible={modalGoods}
    >
      <View
        style={{
          width: "60%",
          height: 190,
          backgroundColor: "red",
          borderRadius: 10,
          position: "absolute",
          top: 164,
          elevation: 8,
          right: -20,
          transform: [{ translateY: yOffset }],
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingVertical: 8.5,
            alignItems: "center",
            paddingTop: 17,
          }}
        >
          <Text style={{ paddingHorizontal: 10 }}>00</Text>
          <Text style={{ fontSize: 18 }}>Item History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingVertical: 8.5,
            alignItems: "center",
          }}
        >
          <Text style={{ paddingHorizontal: 10 }}>00</Text>
          <Text style={{ fontSize: 18 }}>AII Stores Quantities</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingVertical: 8.5,
            alignItems: "center",
          }}
        >
          <Text style={{ paddingHorizontal: 10 }}>00</Text>
          <Text style={{ fontSize: 18 }}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingVertical: 8.5,
            alignItems: "center",
          }}
        >
          <Text style={{ paddingHorizontal: 10 }}>00</Text>
          <Text style={{ fontSize: 18 }}>Share</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
