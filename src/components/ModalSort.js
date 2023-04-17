import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import COLORS from "../assets/colors/COLORS";
import { useDispatch } from "react-redux";
import { oderBySuppliers } from "../redux/actions/actionSuppliers/oderBySupplier";
import { fetchSuppliers } from "../redux/actions/actionSuppliers/getSuppliers";
export default ModalSort = (props) => {
  const { activeModalSort, setActiveModalSort } = props;
  const { pickSort, setPickSort } = props;
  const itemSort = [
    { title: "Mặc định" },
    { title: "A -> Z" },
    { title: "Z -> A" },
  ];

  return (
    <Modal
      animationIn={"zoomIn"}
      animationInTiming={300}
      animationOut={"zoomOut"}
      animationOutTiming={500}
      isVisible={activeModalSort}
      onBackdropPress={() => {
        setActiveModalSort(false);
      }}
    >
      <View style={styles.addStore}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
            alignSelf: "center",
            paddingBottom: 10,
          }}
        >
          Sắp Xếp Theo
        </Text>
        {itemSort.map((item, index) => (
          <ListRadioButton
            key={index}
            title={item.title}
            pickSort={pickSort}
            setPickSort={setPickSort}
            activeModalSort={activeModalSort}
            setActiveModalSort={setActiveModalSort}
          />
        ))}
      </View>
    </Modal>
  );
};
const ListRadioButton = (props) => {
  const dispatch = useDispatch();
  const { pickSort, setPickSort } = props;
  const { setActiveModalSort } = props;
  useEffect(() => {
    if (pickSort == "A -> Z") {
      oderBySuppliers(dispatch, "asc");
    } else if (pickSort == "Z -> A") {
      oderBySuppliers(dispatch, "desc");
    } else {
      fetchSuppliers(dispatch);
    }
  }, [pickSort]);
  return (
    <View style={styles.radioSort}>
      <View style={styles.itemRadioSort}>
        <TouchableOpacity
          onPress={() => {
            setPickSort(props.title), setActiveModalSort(false);
          }}
          activeOpacity={1}
          style={{
            width: 20,
            height: 20,
            borderWidth: 2,
            borderColor: COLORS.primary,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {pickSort == props.title && (
            <View
              style={{
                padding: 5,
                backgroundColor: COLORS.primary,
                borderRadius: 10,
              }}
            ></View>
          )}
        </TouchableOpacity>
        <Text style={{ paddingLeft: 15, fontWeight: "600" }}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  addStore: {
    borderColor: COLORS.bg,
    borderRadius: 20,
    borderWidth: 3,
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
  },

  txt: {
    color: "white",
    fontWeight: "600",
  },
  radioSort: { paddingHorizontal: 20 },
  itemRadioSort: {
    paddingVertical: 13,
    flexDirection: "row",
    alignItems: "center",
  },
});
