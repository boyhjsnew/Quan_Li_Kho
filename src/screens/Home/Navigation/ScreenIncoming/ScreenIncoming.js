import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import COLORS from "../../../../assets/colors/COLORS";
import Toolbar from "../../../../components/Toolbar";

export default function ScreenIncoming() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: COLORS.bg }}>
      <Toolbar title="Incoming No(00000010)" />
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

const DocumentProperties = () => (
  <View style={styles.documentProperties}>
    <View>
      <Text style={{ color: "white", fontWeight: "400" , f}}>
        Document Properties
      </Text>
    </View>
    <View></View>
  </View>
);
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
  },
});
