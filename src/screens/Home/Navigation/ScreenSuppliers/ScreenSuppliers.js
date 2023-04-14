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
import SearchSupplier from "../../../../components/SearchSupplier";
import { useSelector } from "react-redux";
import ModalBottomExcel from "../../../../components/ModalButtomExcel";

export default function ScreenSuppliers(props) {
  const [activeModal, setActiveModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { navigation } = props;
  const subNavigation = useNavigation();
  const [activeModalExcel, setActiveModalExcel] = useState(false);

  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1 }}>
      <Toolbar
        title="Nhà Cung Cấp"
        iconOne="arrow-back-circle"
        iconTwo="search"
        iconThree="sort-amount-asc"
        iconFour="ellipsis-v"
        clickSearch={() => setShowSearch(!showSearch)}
        itemFourClick={() => setActiveModal(!activeModal)}
        clickGoBack={() => navigation.goBack()}
      />

      <NumberSupplier />
      {showSearch == true ? <SearchSupplier /> : null}
      <ModalMenu
        handleExcel={() => {
          setActiveModalExcel(true);
          setActiveModal(false);
        }}
        itemPrintExcel="print"
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
      <ModalBottomExcel
        activeModalExcel={activeModalExcel}
        setActiveModalExcel={setActiveModalExcel}
      ></ModalBottomExcel>
      <ListSuppliers
        navigation={subNavigation}
        activeModalExcel={activeModalExcel}
        setActiveModalExcel={setActiveModalExcel}
      />
      <ButtonAdd
        clickAdd={() => {
          subNavigation.navigate("AddSuppliers", { item: "ADD" });
        }}
      />
    </View>
  );
}
const NumberSupplier = () => {
  const SUPPLIERS = useSelector((state) => state.supplierReducer.items);
  return (
    <View
      style={{
        padding: 3,
        paddingHorizontal: 10,
        backgroundColor: COLORS.secondary,
      }}
    >
      <Text style={{ color: "white", fontWeight: "700" }}>
        SL Nhà Cung Cấp : {SUPPLIERS.length}
      </Text>
    </View>
  );
};
