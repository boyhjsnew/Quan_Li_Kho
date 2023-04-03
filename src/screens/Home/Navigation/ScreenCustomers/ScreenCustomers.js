import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toolbar from "../../../../components/Toolbar";
import COLORS from "../../../../assets/colors/COLORS";
import ButtonAdd from "../../../../components/ButtonAdd";
import ModalMenu from "../../../../components/ModalMenu";
export default function ScreenCustomers() {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1 }}>
      <Toolbar
        title="Nhà Cung Cấp"
        iconOne="arrow-back-circle"
        iconTwo="search"
        iconThree="sort-amount-asc"
        iconFour="ellipsis-v"
        itemFourClick={() => setActiveModal(!activeModal)}
      />
      <ModalMenu
        itemPrintExcel="print"
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
      <ButtonAdd />
    </View>
  );
}
