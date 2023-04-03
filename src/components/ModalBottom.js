import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
const width = Dimensions.get("screen").width;
const ModalBottom = () => {
  const [activeBottomModal, setActiveBttomModal] = useState(true);
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={activeBottomModal}
      backdropColor="black"
      backdropOpacity={0.5}
      onBackdropPress={() => setActiveBttomModal()}
    >
      <View style={styles.modalbottom}>
        <Text style={{ width: 100, height: 5, borderRadius: 8 }}>ejdhdd</Text>
        <Text style={{ width: 100, height: 5, borderRadius: 8 }}>ejdhdd</Text>
        <Text>ejdhdd</Text>
        <Text>ejdhdd</Text>
        <Text>ejdhdd</Text>
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
  },
});
export default ModalBottom;
