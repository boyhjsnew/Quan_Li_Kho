import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Toolbar from "../../../components/Toolbar";
import COLORS from "../../../assets/colors/COLORS";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import updateStore from "../../../redux/actions/pickStore";

export default function ScreenSelectStore() {
  // const listStore = [
  //   { nameStore: "All Store" },
  //   { nameStore: "Kho binh thanh" },
  // ];

  const listStore = useSelector((state) => state.warehouseReducer.items);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <Toolbar
        title="Chọn Kho"
        iconOne="arrow-back-circle"
        clickGoBack={() => navigation.goBack()}
      />
      <FlatList
        data={listStore}
        renderItem={({ item }) => <ItemSelectStock item={item} />}
      ></FlatList>
    </View>
  );
}
const ItemSelectStock = (props) => {
  const item = props.item;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.rowStock}
      onPress={() => {
        updateStore(item.id);
      }}
    >
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
            source={require("../../../assets/images/store.png")}
          ></Image>
        </View>
        <Text style={{ paddingHorizontal: 10, fontWeight: "500" }}>
          {item.name}
        </Text>
      </View>
      <View style={styles.rightRow}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            borderWidth: 2,
            borderColor: COLORS.primary,
            width: 27,
            height: 27,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.isPicked && (
            <View
              style={{
                width: 16,
                height: 16,
                backgroundColor: COLORS.primary,
                borderRadius: 20,
              }}
            ></View>
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  rowStock: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
    justifyContent: "space-between",
    borderBottomWidth: 0.6,
    borderColor: "#E3E3E3",
  },
  leftRow: { flexDirection: "row", alignItems: "center" },
  rightRow: { flexDirection: "row", alignItems: "center" },
});
