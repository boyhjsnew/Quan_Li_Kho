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
      <QuantityGoods />
      <ItemGoods />
      <ItemGoods />
      <BottomTabs />
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

const QuantityGoods = () => (
  <View style={styles.quantityGood}>
    <Text style={styles.textQty}>SL: 627</Text>
    <Text style={styles.textQty}>Tổng tiền: 0đ/0đ </Text>
  </View>
);
const BottomTabs = () => {
  return (
    <View style={styles.bottomTab}>
      <View style={styles.leftTab}>
        <FontAwesome
          name="folder-open-o"
          size={23}
          color={COLORS.white}
        ></FontAwesome>
        <Ionicons name="copy-outline" size={23} color={COLORS.white}></Ionicons>
      </View>
      <View>
        <View style={styles.midTab}>
          <TouchableOpacity style={styles.btnAddGoods} activeOpacity={0.5}>
            <Image
              style={{ height: 25, width: 25 }}
              source={require("../../../../assets/images/download.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.midTab2}></View>
      </View>
      <View style={styles.rightTab}>
        <FontAwesome
          name="sort-amount-asc"
          size={17}
          color="white"
        ></FontAwesome>
        <FontAwesome name="check-square" size={23} color="white"></FontAwesome>
      </View>
    </View>
  );
};

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
    marginVertical: 6,
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  leftRow: { flexDirection: "row", alignItems: "center" },
  rightRow: { flexDirection: "row", alignItems: "center" },
  bottomTab: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  leftTab: {
    paddingVertical: 10,
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    height: 55,
    width: "48%",
    borderTopRightRadius: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  rightTab: {
    backgroundColor: COLORS.primary,
    height: 55,
    width: "48%",
    borderTopLeftRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  midTab: {
    backgroundColor: COLORS.bg,
    height: 27,
    width: 50,
    borderRadius: 15,
    marginBottom: 15,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    position: "relative",
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  midTab2: {
    height: 45,
    position: "absolute",
    backgroundColor: COLORS.primary,
    bottom: -10,
    left: 0,
    right: 0,
  },
  btnAddGoods: {
    marginBottom: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 43,
    width: 43,
    borderRadius: 100,
    backgroundColor: COLORS.primary,
    elevation: 5,
  },
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
});
