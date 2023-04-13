import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
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
  const { navigation } = props;
  const [showSearch, setShowSearch] = useState(false);
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
      <ListCustomers navigation={SubNavigation} />
      <ModalMenu
        itemPrintExcel="print"
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />

      <ButtonAdd
        clickAdd={() => SubNavigation.navigate("AddCustomers", { item: "ADD" })}
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
