import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../../../../assets/colors/COLORS";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import ModalBottom from "../../../../components/ModalBottom";
import deleteSupplier from "../../../../redux/actions/actionSuppliers/deleteSupplier";
import sendEmail from "../../../../utils/sendEmail";
import handlePhoneCall from "../../../../utils/phoneCall";
import ModalBottomExcel from "../../../../components/ModalButtomExcel";
import saveExcelFile from "../../../../utils/saveExcel";

// excel

export default function ListSuppliers(props) {
  const SUPPLIERS = useSelector((state) => state.supplierReducer.items);
  const [refresh, setRefresh] = useState(false);
  const [activeBottomModal, setActiveBottomModal] = useState(false);
  const [itemSupplier, setitemSupplier] = useState("");
  const dispatch = useDispatch();
  const { activeModalExcel, setActiveModalExcel } = props;

  useEffect(() => {
    setRefresh(!refresh);
  }, [SUPPLIERS]);

  const deleteItem = () => {
    deleteSupplier(itemSupplier.id);
    setActiveBottomModal(false);
    dispatch({
      type: "DELETE_SUPPLIER",
      payload: itemSupplier.id,
    });
  };

  const renderItems = ({ item }) => (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("AddSuppliers", { item: item })}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 12,
        alignItems: "center",
        marginVertical: 5,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.border,
            borderRadius: 19,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 35, height: 35, marginTop: 3 }}
            source={require("../../../../assets/images/delivery-man.png")}
          ></Image>
        </View>
        <Text style={{ fontWeight: "700", paddingHorizontal: 10 }}>
          {item.name}
        </Text>
      </View>
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => {
          setActiveBottomModal(true);
          setitemSupplier(item);
        }}
      >
        <Text
          style={{
            paddingHorizontal: 1,
            fontSize: 8,
            color: "#8E8D95",
          }}
        >
          {"\u2B24"}
        </Text>
        <Text
          style={{
            paddingHorizontal: 1,
            fontSize: 8,
            color: "#8E8D95",
          }}
        >
          {"\u2B24"}
        </Text>
        <Text
          style={{
            paddingHorizontal: 1,
            fontSize: 8,
            color: "#8E8D95",
          }}
        >
          {"\u2B24"}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={SUPPLIERS}
        extraData={refresh}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItems}
      ></FlatList>
      <ModalBottom
        phoneCall={() => handlePhoneCall(itemSupplier.phoneCall)}
        sendEmail={() => sendEmail(itemSupplier.email, itemSupplier.name)}
        deleteItem={deleteItem}
        activeBottomModal={activeBottomModal}
        setActiveBottomModal={setActiveBottomModal}
      />
      <ModalBottomExcel
        shareExcel={() => saveExcelFile(SUPPLIERS)}
        activeModalExcel={activeModalExcel}
        setActiveModalExcel={setActiveModalExcel}
      />
    </View>
  );
}
