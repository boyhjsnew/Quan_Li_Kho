import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import Toolbar from "../../../../components/Toolbar";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../../../../assets/colors/COLORS";
import { TextInput } from "react-native-gesture-handler";
import HeaderNameStore from "../../../../components/HeaderNameStore";
import updateProducts from "../../../../redux/actions/actionProducts/updateProducts";
import { useDispatch } from "react-redux";
export default function ScreenEditGoods({ navigation, route }) {
  const { item } = route.params;
  const id = item.id;
  const [name, setName] = useState(item.nameproduct);
  const [barcode, setBarcode] = useState(item.barcode);
  const [description, setDescription] = useState(item.description);
  const [pricePurcharse, setPricePurcharse] = useState(item.pricePurcharse);
  const [priceSale, setPriceSale] = useState(item.priceSale);

  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1 }}>
      <Toolbar
        iconOne="arrow-back-circle"
        title="Sửa sản phẩm"
        iconThree="check"
        itemThreeClick={() => {
          updateProducts(
            id,
            name,
            barcode,
            description,
            pricePurcharse,
            priceSale
          );
          navigation.goBack();
        }}
        clickGoBack={() => navigation.goBack()}
      />
      <HeaderNameStore />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ padding: 15 }}
        contentContainerStyle={{ paddingBottom: 20 }}
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
        />
        <ButtonContentGoods
          navigation={navigation}
          id={id}
          name={name}
          barcode={barcode}
          description={description}
          pricePurcharse={pricePurcharse}
          priceSale={priceSale}
        />
        <QuantityGoods />
      </ScrollView>
    </View>
  );
}

const ContentAddGoods = (props) => {
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
        Tên sản phẩm
      </Text>
      <TextInput
        onChangeText={props.setName}
        value={props.name}
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
          onChangeText={props.setBarcode}
          value={props.barcode}
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
        onChangeText={props.setDescription}
        value={props.description}
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
            value={props.pricePurcharse}
            onChangeText={(value) => {
              const newPrice = value.replace(/\D/g, "");
              const formattedPrice = Number(newPrice).toLocaleString("vi-VN");
              props.setPricePurcharse(formattedPrice);
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
            value={props.priceSale}
            keyboardType="numeric"
            onChangeText={(value) => {
              const newPrice = value.replace(/\D/g, "");
              const formattedPrice = Number(newPrice).toLocaleString("vi-VN");
              props.setPriceSale(formattedPrice);
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
  const { name, barcode, description, pricePurcharse, priceSale, id } = props;

  const dispatch = useDispatch();
  const { navigation, navigation2 } = props;
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
        navigation.push("Receive", { idProduct: id });
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
        return navigation.push("Issue", { idProduct: id });
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
