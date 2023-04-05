import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toolbar from "../../../../components/Toolbar";
import COLORS from "../../../../assets/colors/COLORS";
import ButtonAdd from "../../../../components/ButtonAdd";
import ModalMenu from "../../../../components/ModalMenu";
import ListCustomers from "./ListCustomers";
import ModalBottom from "../../../../components/ModalBottom";
export default function ScreenCustomers(props) {
  const [activeModal, setActiveModal] = useState(false);
  const [activeBottomModal, setActiveBottomModal] = useState(false);
  const SubNavigation = useNavigation();
  const {navigation} = props
  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1 }}>
      <Toolbar
        title="Khách Hàng"
        iconOne="arrow-back-circle"
        iconTwo="search"
        iconThree="sort-amount-asc"
        iconFour="ellipsis-v"
        clickGoBack={() => navigation.goBack()}
        itemFourClick={() => setActiveModal(!activeModal)}/>
      <ListCustomers clickItemCustomers={() => setActiveBottomModal(true)} clickToAddCustomer={()=>SubNavigation.push('AddCustomers')} />
      <ModalMenu
        itemPrintExcel="print"
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
      <ModalBottom
        activeBottomModal={activeBottomModal}
        setActiveBottomModal={setActiveBottomModal}
      />
      <ButtonAdd clickAdd={()=>SubNavigation.push('AddCustomers')} />
    </View>
  );
}
