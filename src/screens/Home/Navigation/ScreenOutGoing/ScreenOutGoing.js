import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

import COLORS from "../../../../assets/colors/COLORS";
import Toolbar from "../../../../components/Toolbar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ButtonAdd from "../../../../components/ButtonAdd";
import ModalMenu from "../../../../components/ModalMenu";

export default function ScreenOutGoing() {
  const [activeModal, setActiveModal] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1 }}>
      <Toolbar
        title="Xuất hàng"
        iconOne="arrow-back-circle"
        iconTwo="search"
        iconThree="barcode"
        iconFour="ellipsis-v"
        clickGoBack={() => navigation.goBack()}
        itemFourClick={() => setActiveModal(!activeModal)}
      />
      <QuantityGoods />
      <DocumentProperties />
      <ModalMenu
        itemSort="sort"
        itemPrintExcel="print"
        itemListSetting="list-ul"
        itemHelp="info-circle"
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        route={route.name}
      />
      <ButtonAdd />
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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
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
        <TouchableOpacity style={styles.subMenu}>
          <FontAwesome name="angle-down" size={29} color={COLORS.white} />
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
    alignItems: "center",
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
    height: 45,
    borderRadius: 8,
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  switchPaid: {
    backgroundColor: "#4DA55A",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 100,
    height: 24,
    width: 60,
    justifyContent: "space-between",
  },
  switchUnPaid: {
    backgroundColor: "#FA3850",
    alignItems: "center",
    flexDirection: "row-reverse",
    borderRadius: 100,
    height: 24,
    width: 60,
  },

  paid: {
    width: 17,
    height: 17,
    backgroundColor: "white",
    borderRadius: 100,
    margin: 3,
  },
  subMenu: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    height: 30,
    width: 30,
    borderRadius: 100,
    marginLeft: 10,
  },
});
