import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View } from "react-native";
import Toolbar from "../../../../components/Toolbar";
import COLORS from "../../../../assets/colors/COLORS";
import ButtonAdd from "../../../../components/ButtonAdd";
import ModalMenu from "../../../../components/ModalMenu";
import ListCustomers from "./ListCustomers";
import ModalBottom from "../../../../components/ModalBottom";
import SearchCustomer from "../../../../components/SearchCustomer";
import { useSelector } from "react-redux";
export default function ScreenCustomers(props) {
  const [activeModal, setActiveModal] = useState(false);
  const SubNavigation = useNavigation();
  const { navigation, from } = props;
  const [showSearch, setShowSearch] = useState(false);
  const [activeModalExcel, setActiveModalExcel] = useState(false);

  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1 }}>
      <Toolbar
        title="Khách Hàng"
        iconOne="arrow-back-circle"
        iconTwo="search"
        iconThree="sort-amount-asc"
        iconFour="ellipsis-v"
        clickGoBack={() => navigation.goBack()}
        clickSearch={() => setShowSearch(!showSearch)}
        itemFourClick={() => setActiveModal(!activeModal)}
      />
      <NumberCustomer />
      {showSearch ? <SearchCustomer /> : null}
      <ListCustomers
        from={from}
        navigation2={navigation}
        navigation={SubNavigation}
        activeModalExcel={activeModalExcel}
        setActiveModalExcel={setActiveModalExcel}
        se
      />
      <ModalMenu
        handleExcel={() => {
          setActiveModal(false);
          setActiveModalExcel(true);
        }}
        itemPrintExcel="print"
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />

      <ButtonAdd
        clickAdd={() => SubNavigation.push("AddCustomers", { item: "ADD" })}
      />
    </View>
  );
}

const NumberCustomer = () => {
  const CUSTOMERS = useSelector((state) => state.customersReducer.items);
  return (
    <View
      style={{
        padding: 3,
        paddingHorizontal: 10,
        backgroundColor: COLORS.secondary,
      }}
    >
      <Text style={{ color: "white", fontWeight: "700" }}>
        SL Nhà Cung Cấp : {CUSTOMERS.length}
      </Text>
    </View>
  );
};
