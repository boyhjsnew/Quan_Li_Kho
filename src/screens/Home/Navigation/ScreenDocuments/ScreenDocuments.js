import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Toolbar from "../../../../components/Toolbar";
import COLORS from "../../../../assets/colors/COLORS";
import ButtonAdd from "../../../../components/ButtonAdd";
import FloatingButton from "../../../../components/FloatingButton";
import ListCustomers from "../ScreenCustomers/ListCustomers";
import ListDocuments from "./ListDocuments";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchDocument from "../../../../components/SearchDocument";
import HeaderNameStore from "../../../../components/HeaderNameStore";
import { useSelector } from "react-redux";

export default function ScreenDocuments() {
  const navigation = useNavigation();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1, position: "relative" }}>
      <Toolbar
        title="Chứng Từ"
        iconOne="arrow-back-circle"
        iconTwo="search"
        iconThree="ellipsis-v"
        clickSearch={() => setShowSearch(!showSearch)}
        clickGoBack={() => navigation.goBack()}
      />
      {showSearch == true ? <SearchDocument /> : null}
      <HeaderNameStore />
      <QuantityDocuments />
      <ListDocuments navigation={navigation} />

      <FloatingButton navigation={navigation} />
    </View>
  );
}

const QuantityDocuments = () => {
  const quantityDocuments = useSelector(
    (state) => state.documentsReducer.items.length
  );
  return (
    <View style={{ backgroundColor: COLORS.secondary, padding: 10 }}>
      <View>
        <Text style={styles.txtQuanity}>
          Tổng giao dịch: {quantityDocuments}
        </Text>
      </View>
      <View style={styles.viewAll}>
        <Text style={styles.txtShowAll}>ALL</Text>
        <TouchableOpacity>
          <Ionicons name="caret-down" color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txtQuanity: { fontWeight: "700", color: "white", marginTop: 5 },
  txtShowAll: { fontWeight: "700", color: "white" },
  viewAll: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    paddingVertical: 10,
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
  },
});
