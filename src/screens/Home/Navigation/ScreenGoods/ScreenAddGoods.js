import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";

import Toolbar from "../../../../components/Toolbar";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../../../../assets/colors/COLORS";

import HeaderNameStore from "../../../../components/HeaderNameStore";
import insertProducts from "../../../../redux/actions/actionProducts/insertProducts";
import * as ImagePicker from "react-native-image-picker";
import firebase from "firebase/compat";
import { useDispatch } from "react-redux";

export default function ScreenAddGoods({ navigation }) {
  const [name, setName] = useState("");
  const [barcode, setBarcode] = useState("");
  const [description, setDescription] = useState("");
  const [pricePurcharse, setPricePurcharse] = useState();
  const [priceSale, setPriceSale] = useState();
  const [priceSaleData, setPriceSaleData] = useState();
  const [pricePurcharseData, setPricePurcharseData] = useState();
  const dispatch = useDispatch();
  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1 }}>
      <Toolbar
        iconOne="arrow-back-circle"
        title="Thêm Hàng Hóa"
        iconThree="check"
        clickGoBack={() => navigation.goBack()}
        itemThreeClick={() => {
          if (
            name.trim() == "" ||
            barcode.trim() == "" ||
            description.trim() == "" ||
            pricePurcharse.trim() == "" ||
            priceSale.trim() == ""
          ) {
            alert("Vui lòng điền đầy đủ thông tin");
          } else {
            insertProducts(
              name,
              barcode,
              description,
              "nulll",
              parseInt(pricePurcharse),
              parseInt(priceSale)
            );
            navigation.goBack();
          }
        }}
      />
      <HeaderNameStore />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 25 }}
        style={{ padding: 15, flexGrow: 1 }}
      >
        <ContentAddGoods
          name={name}
          setName={setName}
          barcode={barcode}
          setBarcode={setBarcode}
          description={description}
          setDescription={setDescription}
          pricePurcharse={pricePurcharse}
          setPricePurcharse={setPricePurcharse}
          priceSale={priceSale}
          setPriceSale={setPriceSale}
          priceSaleData={priceSaleData}
          setPricePurcharseData={setPricePurcharseData}
          pricePurcharseData={pricePurcharseData}
          setPriceSaleData={setPriceSaleData}
        />
        <ButtonContentGoods
          navigation={navigation}
          name={name}
          setName={setName}
          barcode={barcode}
          setBarcode={setBarcode}
          description={description}
          setDescription={setDescription}
          pricePurcharse={pricePurcharse}
          setPricePurcharse={setPricePurcharse}
          priceSale={priceSale}
          setPriceSale={setPriceSale}
        />
        <QuantityGoods />
      </ScrollView>
    </View>
  );
}

const ContentAddGoods = (props) => {
  const {
    naviagtion,
    name,
    setName,
    barcode,
    setBarcode,
    description,
    setDescription,
    pricePurcharse,
    setPricePurcharse,
    priceSale,
    setPriceSale,
    priceSaleData,
    setPriceSaleData,
    pricePurcharseData,
    setPricePurcharseData,
  } = props;

  return (
    <View style={{}}>
      <Text
        style={{
          color: "#90929E",
          fontSize: 16,
          fontWeight: "700",
          marginVertical: 6,
          paddingTop: 10,
        }}
      >
        Tên sản phẩm
      </Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Tên sản phẩm"
        cursorColor={COLORS.primary}
        style={{
          height: 40,
          backgroundColor: "white",
          borderRadius: 8,
          paddingLeft: 10,
          paddingEnd: 10,
          color: "black",
          borderWidth: 0.5,
          borderColor: COLORS.border,
        }}
      ></TextInput>
      <Text
        style={{
          color: "#90929E",
          fontSize: 16,
          fontWeight: "700",
          marginVertical: 6,
          paddingTop: 10,
        }}
      >
        Barcode
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextInput
          value={barcode}
          onChangeText={setBarcode}
          placeholder="Barcode"
          cursorColor={COLORS.primary}
          style={{
            width: "80%",
            height: 40,
            backgroundColor: "white",
            borderRadius: 8,
            paddingLeft: 10,
            paddingEnd: 10,
            color: "black",
            borderWidth: 0.5,
            borderColor: COLORS.border,
          }}
        ></TextInput>
        {/* CLICK QR_CODE */}
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: "15%",
            height: 40,
            backgroundColor: "white",
            borderRadius: 8,
            borderColor: "black",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 0.5,
            borderColor: COLORS.border,
          }}
        >
          <Ionicons name="barcode-sharp" size={30} color={"#90929E"}></Ionicons>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: "#90929E",
          fontSize: 16,
          fontWeight: "700",
          marginVertical: 6,
          paddingTop: 10,
        }}
      >
        Mô tả
      </Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        cursorColor={COLORS.primary}
        placeholder="Mô tả"
        style={{
          height: 40,
          backgroundColor: "white",
          borderRadius: 8,
          paddingLeft: 10,
          paddingEnd: 10,
          color: "black",
          borderWidth: 0.5,
          borderColor: COLORS.border,
        }}
      ></TextInput>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1, paddingRight: 10 }}>
          <Text
            style={{
              color: "#90929E",
              fontSize: 16,
              fontWeight: "700",
              marginVertical: 6,
              paddingTop: 10,
            }}
          >
            Giá mua
          </Text>
          <TextInput
            value={pricePurcharseData}
            onChangeText={(value) => {
              const newPrice = value.replace(/\D/g, "");
              const formattedPrice = Number(newPrice).toLocaleString("vi-VN", {
                style: "decimal",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              });
              setPricePurcharseData(formattedPrice);
              setPricePurcharse(newPrice);
            }}
            cursorColor={COLORS.primary}
            placeholder="Giá mua"
            style={{
              height: 40,
              backgroundColor: "white",
              borderRadius: 8,
              paddingLeft: 10,
              paddingEnd: 10,
              color: "black",
              borderWidth: 0.5,
              borderColor: COLORS.border,
            }}
          ></TextInput>
        </View>
        <View style={{ flex: 1, paddingLeft: 5 }}>
          <Text
            style={{
              color: "#90929E",
              fontSize: 16,
              fontWeight: "700",
              marginVertical: 6,
              paddingTop: 10,
            }}
          >
            Giá bán
          </Text>
          <TextInput
            value={priceSaleData}
            keyboardType="numeric"
            onChangeText={(value) => {
              const newPrice = value.replace(/\D/g, "");
              const formattedPrice = Number(newPrice).toLocaleString("vi-VN", {
                style: "decimal",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              });
              setPriceSaleData(formattedPrice);
              setPriceSale(newPrice);
            }}
            cursorColor={COLORS.primary}
            placeholder="Giá bán"
            style={{
              height: 40,
              backgroundColor: "white",
              borderRadius: 8,
              paddingLeft: 10,
              paddingEnd: 10,
              color: "black",
              borderWidth: 0.5,
              borderColor: COLORS.border,
            }}
          ></TextInput>
        </View>
      </View>
    </View>
  );
};
const ButtonContentGoods = (props) => {
  const { navigation } = props;
  const {
    name,
    setName,
    barcode,
    setBarcode,
    description,
    setDescription,
    pricePurcharse,
    setPricePurcharse,
    priceSale,
    setPriceSale,
  } = props;
  const dispatch = useDispatch();
  const infoBtn = [
    {
      iconBtn: require("./../../../../assets/images/add.png"),
      nameBtn: "Nhận Hàng",
      clickBtn: () => {
        dispatch({
          type: "INSERT_PRODUCT",
          payload: {
            name,
            barcode,
            description,
            pricePurcharse,
            priceSale,
            image: ["null", "null"],
          },
        });
        if (name.trim() == "" || pricePurcharse == "" || priceSale == "") {
          alert("Vui lòng nhập đầy đủ thông tin");
        }
      },
    },
    {
      iconBtn: require("../../../../assets/images/minus.png"),
      nameBtn: "Xuất Hàng",
      clickBtn: () => {
        dispatch({
          type: "INSERT_PRODUCT",
          payload: {
            name,
            barcode,
            description,
            pricePurcharse,
            priceSale,
            image: ["null", "null"],
          },
        });
        navigation.navigate("Issue");
      },
    },
    {
      iconBtn: require("../../../../assets/images/exchange.png"),
      nameBtn: "Chuyển Kho",
      clickBtn: () => {
        alert("transfer");
      },
    },
  ];
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 15,
      }}
    >
      {infoBtn.map((info, index) => {
        return (
          <TouchableOpacity
            onPress={info.clickBtn}
            key={index}
            style={{
              width: 110,
              height: 110,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 8,
              backgroundColor: "white",
              borderColor: COLORS.border,
              borderWidth: 0.5,
            }}
          >
            <Image style={{ width: 35, height: 35 }} source={info.iconBtn} />
            <Text style={{ paddingTop: 15 }}>{info.nameBtn}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const QuantityGoods = () => {
  return (
    <View>
      <Text
        style={{
          color: "#90929E",
          fontSize: 16,
          fontWeight: "700",
          marginVertical: 6,
          paddingTop: 10,
        }}
      >
        Số lượng
      </Text>
      <TextInput
        editable={false}
        cursorColor={COLORS.primary}
        value="0.0"
        style={{
          height: 40,
          backgroundColor: "#D4DAF6",
          borderRadius: 8,
          paddingLeft: 10,
          paddingEnd: 10,
          color: "black",
        }}
      ></TextInput>
      <View
        style={{
          marginVertical: 15,
          height: 70,
          backgroundColor: "#D4DAF6",
          borderRadius: 8,
          paddingLeft: 10,
          paddingEnd: 10,
          color: "black",
          padding: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
          }}
        >
          Số Lượng Trong Kho
        </Text>
        <View
          style={{
            paddingTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "600",
            }}
          >
            TỔNG:
          </Text>
          <Text
            style={{
              fontWeight: "600",
            }}
          >
            0.00
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          width: 50,
          height: 50,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 0.5,
          borderColor: COLORS.bg,
        }}
      >
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../../../../assets/images/addimage.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
