import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Switch } from "react-native-switch";
import COLORS from "../../../../assets/colors/COLORS";
import Toolbar from "../../../../components/Toolbar";

export default function ScreenIncoming() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: COLORS.bg }}>
      <Toolbar
        title="Nhập hàng"
        iconOne="arrow-back-circle"
        iconTwo="search"
        iconThree="ellipsis-v"
      />
      <QuantityGoods />
      <DocumentProperties />
    </View>
  );
}
const QuantityGoods = () => (
  <View style={styles.quantityGood}>
    <View>
      <Text style={styles.textQty}>Tổng nhập: 0</Text>
      <Text style={styles.textQty}>SL: 0 </Text>
    </View>
    <Text style={styles.textTotal}>Tổng tiền: 0đ</Text>
  </View>
);

const DocumentProperties = () => {
  const [paid, setPaid] = useState(true);
  return (
    <View style={styles.documentProperties}>
      <View>
        <View>
          <Text style={{ color: "white", fontWeight: "400" }}>
            Document Properties
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={paid ? styles.switchPaid : styles.switchUnPaid}
          activeOpacity={1}
          onPress={() => setPaid(!paid)}
        >
          <View>
            <View style={styles.paid}></View>
          </View>
          <Text
            style={{
              fontSize: 9,
              fontWeight: "700",
              color: "white",
            }}
          >
            {paid ? "PAID" : "UNPAID"}
          </Text>
          <View style={{ paddingHorizontal: 2 }}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quantityGood: {
    marginBottom: 5,
    paddingVertical: 3,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.secondary,
  },
  textQty: {
    color: "white",
    fontWeight: "700",
  },
  textTotal: {
    color: "white",
    fontWeight: "700",
    alignSelf: "flex-end",
  },
  documentProperties: {
    margin: 15,
    padding: 14,
    borderRadius: 8,
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  switchPaid: {
    backgroundColor: "#4DA55A",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 100,
    height: 24,
    width: 58,
    justifyContent: "space-between",
  },
  switchUnPaid: {
    backgroundColor: "red",
    alignItems: "center",
    flexDirection: "row-reverse",
    borderRadius: 100,
    height: 24,
    width: 58,
  },

  paid: {
    width: 17,
    height: 17,
    backgroundColor: "white",
    borderRadius: 100,
    margin: 3,
  },
});
