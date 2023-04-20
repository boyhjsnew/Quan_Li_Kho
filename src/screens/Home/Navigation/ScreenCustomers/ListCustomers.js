import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import COLORS from "../../../../assets/colors/COLORS";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import ModalBottom from "../../../../components/ModalBottom";
import deleteCustomer from "../../../../redux/actions/actionCustomers/deleteCustomers";
import ModalBottomExcel from "../../../../components/ModalButtomExcel";
import {
  shareExcel,
  shareFileExcelCustomers,
} from "../../../../utils/shareExcel";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function ListCustomers(props) {
  const CUSTOMERS = useSelector((state) => state.customersReducer.items);
  const [activeBottomModal, setActiveBottomModal] = useState(false);
  const [itemCustomers, setitemCustomers] = useState("");
  const { activeModalExcel, setActiveModalExcel,from,navigation2 } = props;
  const navigationSub = useNavigation()
  const dispatch = useDispatch()
 

  const renderItems = ({ item }) => (

    <TouchableOpacity

      onPress={() => {
        if(from=="fromHome"){
          return props.navigation.navigate("AddCustomers", { item: item })
        }
        if(from!=='fromHome'){
         navigation2.navigate('OutGoing',{item:item});
         dispatch({
          type:'PICK_CUSTOMERS',
          payload:item
         })
        }
      }}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 10,
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
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 36, height: 36 }}
            source={require("../../../../assets/images/investor.png")}
          ></Image>
        </View>
        <Text style={{ fontWeight: "700", paddingHorizontal: 10 }}>
          {item.name}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setActiveBottomModal(true);
          setitemCustomers(item);
        }}
        style={{ flexDirection: "row", padding: 10 }}
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
        data={CUSTOMERS}
        keyExtractor={(item) => item.id}
        renderItem={renderItems}
      ></FlatList>
      <ModalBottom
        deleteItem={() => {
          deleteCustomer(itemCustomers.id);
          setActiveBottomModal(false);
        }}
        activeBottomModal={activeBottomModal}
        setActiveBottomModal={setActiveBottomModal}
      />
      <ModalBottomExcel
        shareExcel={() => shareFileExcelCustomers(CUSTOMERS)}
        activeModalExcel={activeModalExcel}
        setActiveModalExcel={setActiveModalExcel}
      />
    </View>
  );
}
