import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../../../../assets/colors/COLORS";
import Ionicons from "@expo/vector-icons/Ionicons";
import Dialog from "react-native-dialog";

import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import deleteStore from "../../../../redux/actions/deleteStore";

export default function ListStock(props) {
  const listStock = useSelector((state) => state.warehouseReducer.items);
  return (
    <View>
      <FlatList
        data={listStock}
        key={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemStock item={item} listStock={listStock} />
        )}
      />
    </View>
  );
}

const ItemStock = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const handlerDelete = (id, isPicked, name) => {
    if (isPicked || name == "Kho Mặc Định") {
      if (isPicked) {
        alert(`${name} đang hiện hành không thể xoá !`);
      } else {
        alert("Kho mặc định không thể xoá");
      }
    } else {
      deleteStore(id),
        dispatch({
          type: "DELETE_WAREHOUSE",
          payload: { id },
        });
    }
  };
  const renderRightActions = (item) => {
    return (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handlerDelete(item.id, item.isPicked, item.name)}
      >
        <Ionicons name="trash-outline" size={27} color="white" />
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={() => renderRightActions(item)}>
        <View style={styles.rowStock}>
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
                source={require("../../../../assets/images/store.png")}
              ></Image>
            </View>
            <Text style={{ paddingHorizontal: 10, fontWeight: "500" }}>
              {item.name}
            </Text>
          </View>

          <View style={styles.rightRow}>
            <Text style={{ paddingHorizontal: 10, fontWeight: "500" }}>
              {item.quantity}
            </Text>
            <TouchableOpacity style={{ paddingTop: 1 }}></TouchableOpacity>
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
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
  rightRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#dd2c00",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
  },
});
