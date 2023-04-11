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
      {showSearch==true ?<SearchDocument/>:null}
      <HeaderDocuments />
      <QuantityDocuments />
      <ListDocuments />
      <ListDocuments />
      <FloatingButton navigation={navigation} />
    </View>
  );
}
const HeaderDocuments = () => (
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

const QuantityDocuments = () => {
  return (
    <View style={{ backgroundColor: COLORS.secondary, padding: 10 }}>
      <View>
        <Text style={styles.txtQuanity}>SL TÀI LIỆU: 11</Text>
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
    paddingVertical:10,
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
  },
});
