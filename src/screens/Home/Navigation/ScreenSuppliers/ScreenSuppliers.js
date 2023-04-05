import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Toolbar from "../../../../components/Toolbar";
import COLORS from "../../../../assets/colors/COLORS";
import ButtonAdd from "../../../../components/ButtonAdd";
import ModalMenu from "../../../../components/ModalMenu";
import ListSuppliers from "./ListSuppliers";
import ModalBottom from "../../../../components/ModalBottom";
import { SUPPLIERS } from "../../../../data/suppliers";

export default function ScreenSuppliers(props) {
  const [activeModal, setActiveModal] = useState(false);
  const [activeBottomModal, setActiveBottomModal] = useState(false);
  const {navigation} = props;
  const subNavigation  = useNavigation()
  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1 }}>
      <Toolbar
        title="Nhà Cung Cấp"
        iconOne="arrow-back-circle"
        iconTwo="search"
        iconThree="sort-amount-asc"
        iconFour="ellipsis-v"
        itemFourClick={() => setActiveModal(!activeModal)}
        clickGoBack={() => navigation.goBack()}
      />
      <NumberSupplier />
      <ModalMenu
        itemPrintExcel="print"
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />

      <ListSuppliers
        clickItemSupplier={() => setActiveBottomModal(!activeBottomModal)}
        clickToAddSuppliers={()=>subNavigation.push('AddSuppliers')}
      />
      <ModalBottom
        activeBottomModal={activeBottomModal}
        setActiveBottomModal={setActiveBottomModal}
      />
      <ButtonAdd clickAdd={()=>{subNavigation.push('AddSuppliers')}} />
    </View>
  );
}
const NumberSupplier = () => {
  return (
    <View
      style={{
        padding: 3,
        paddingHorizontal: 10,
        backgroundColor: COLORS.secondary,
      }}>
      <Text style={{ color: "white", fontWeight: "700" }}>
        SL Nhà Cung Cấp : {SUPPLIERS.length}
      </Text>
    </View>
  );
};
