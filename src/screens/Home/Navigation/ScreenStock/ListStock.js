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
import Modal from "react-native-modal";

import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

export default function ListStock(props) {
  const [listStock, setListStock] = useState([
    { id: 1, name: "Kho binh thanh", quantity: "627" },
    { id: 2, name: "Kho binh tan", quantity: "628" },
    { id: 3, name: "Kho binh thanh", quantity: "627" },
    { id: 4, name: "Kho binh thanh", quantity: "627" },
  ]);

  return (
    <View>
      <FlatList
        data={listStock}
        key={(item) => item.id}
        renderItem={({ item }) => (
          <ItemStock
            item={item}
            listStock={listStock}
            setListStock={setListStock}
          />
        )}
      />
    </View>
  );
}

const ItemStock = (props) => {
  const { item, listStock, setListStock } = props;
  const handlerDelete = (id) => {
    setListStock(listStock.filter((item) => item.id != id));
  };
  const renderRightActions = (id) => {
    return (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handlerDelete(id)}
      >
        <Ionicons name="trash-outline" size={27} color="white" />
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={() => renderRightActions(item.id)}>
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
