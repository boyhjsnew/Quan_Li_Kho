import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Toolbar from "../../../../components/Toolbar";
import ListStock from "./ListStock";

import COLORS from "../../../../assets/colors/COLORS";

import { useNavigation } from "@react-navigation/native";
import ButtonAdd from "../../../../components/ButtonAdd";
import ModalAddStore from "./ModalAddStore";

export default function ScreenStock() {
  const navigation = useNavigation();
  const [activeModal, setActiveModal] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <Toolbar
        title="Quản Lý Kho"
        iconOne="arrow-back-circle"
        iconTwo="search"
        clickGoBack={() => navigation.goBack()}
      />
      <ListStock />
      <ModalAddStore
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
      <ButtonAdd clickAdd={() => setActiveModal(true)} />
    </View>
  );
}
