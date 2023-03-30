import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import COLORS from "../../../../assets/colors/COLORS";
import Toolbar from "../../../../components/Toolbar";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ScreenGood() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1 }}>
      <Toolbar title="Hàng hoá" />
      <HeaderGoods />
      <ItemGoods />
      <ItemGoods />
    </View>
  );
}
const HeaderGoods = () => (
  <View style={styles.header}>
    <Image
      style={{ width: 20, height: 20, opacity: 0.7 }}
      source={require("../../../../assets/images/store.png")}
    ></Image>
    <Text
      style={{
        paddingLeft: 15,
        color: "white",
        opacity: 0.7,
      }}
    >
      Kho Bình Thạnh
    </Text>
  </View>
);
const ItemGoods = () => (
  <TouchableOpacity style={styles.rowGoods}>
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
          style={{ width: 27, height: 27 }}
          source={require("../../../../assets/images/image.png")}
        ></Image>
      </View>

      {/* info goood */}
      <View>
        <Text
          style={{
            paddingHorizontal: 10,
            fontWeight: "500",
          }}
        >
          {/* name good */}
          Nuoc Giai Khat
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 5,
          }}
        >
          <FontAwesome
            style={{ paddingLeft: 10, paddingRight: 5, marginTop: 1 }}
            size={15}
            name="barcode"
          ></FontAwesome>
          <Text style={{ fontSize: 12, opacity: 0.5 }}>3463463</Text>
        </View>
        <Text style={{ paddingLeft: 10, opacity: 0.5 }}>Cocacola</Text>
      </View>
    </View>
    <View style={styles.rightRow}>
      <Text style={{ paddingHorizontal: 10, fontWeight: "500" }}>627.00</Text>
      <TouchableOpacity style={{ paddingTop: 1 }}>
        <Ionicons name="ellipsis-vertical" size={20} color="gray"></Ionicons>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  header: {
    paddingBottom: 15,
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
  },
  rowGoods: {
    elevation: 1,
    backgroundColor: "white",
    marginBottom: 10,
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  leftRow: { flexDirection: "row", alignItems: "center" },
  rightRow: { flexDirection: "row", alignItems: "center" },
});
