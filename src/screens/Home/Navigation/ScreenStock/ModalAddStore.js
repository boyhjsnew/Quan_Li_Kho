import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../../../../assets/colors/COLORS";
import Modal from "react-native-modal";
import { useSelector, useDispatch } from "react-redux";
import insertStore from "../../../../redux/actions/insertStore";

export default ModalAddStore = (props) => {
  const { activeModal, setActiveModal } = props;
  const [inputext, setInputext] = useState("");
  return (
    <Modal
      isVisible={activeModal}
      onBackdropPress={() => setActiveModal(false)}
    >
      <View style={styles.addStore}>
        <Text style={{ fontSize: 15, fontWeight: "600" }}>Thêm Kho</Text>
        <View
          style={{
            marginTop: 20,
            width: "90%",
            borderBottomWidth: 1,
            borderColor: "#000088",
          }}
        >
          <TextInput
            onChangeText={setInputext}
            placeholder="Tên kho"
            style={{ marginTop: 10, paddingVertical: 5, fontSize: 16 }}
          ></TextInput>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.btnCancel}
            onPress={() => setActiveModal(false)}
          >
            <Text style={styles.txt}>HUỶ BỎ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => {
              insertStore(inputext), setActiveModal(false);
            }}
          >
            <Text style={styles.txt}>ĐỒNG Ý</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  addStore: {
    borderColor: COLORS.bg,
    borderRadius: 20,
    borderWidth: 3,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingVertical: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 17,
    paddingTop: 30,
  },
  btnCancel: {
    width: "50%",
    alignItems: "center",
    backgroundColor: "#6F7885",
    paddingVertical: 7,
    borderRadius: 50,
    marginEnd: 5,
  },
  btnAdd: {
    width: "50%",
    alignItems: "center",
    backgroundColor: "#656FC4",
    paddingVertical: 7,
    borderRadius: 50,
    marginStart: 5,
  },
  txt: {
    color: "white",
    fontWeight: "600",
  },
});
