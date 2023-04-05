import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "react-native-elements/dist/header/Header";
import Toolbar from "../../../../components/Toolbar";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../../../../assets/colors/COLORS";
import { TextInput } from "react-native-gesture-handler";
export default function ScreenEditGoods({navigation}) {
  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1 }}>
      <Toolbar
        iconOne="arrow-back-circle"
        title="Edit item"
        iconThree="check"
        itemThreeClick={()=>navigation.goBack()}
        clickGoBack={() => navigation.goBack()}
      />
      <HeaderGoods />
      <ScrollView style={{ padding: 15 }}>
        <ContentAddGoods />
        <ButtonContentGoods />
        <QuantityGoods />
      </ScrollView>
    </View>
  );
}
const HeaderGoods = () => (
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
const styles = StyleSheet.create({
  header: {
    paddingBottom: 10,
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
  },
});

const ContentAddGoods = () => {
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
        Tên nhà cung cấp
      </Text>
      <TextInput
        placeholder="Tên nhà cung cấp"
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
    </View>
  );
};
const ButtonContentGoods = (props) => {
  const infoBtn = [
    {
      iconBtn: require("./../../../../assets/images/add.png"),
      nameBtn: "Nhận Hàng",
      clickBtn: () => {
        alert("add");
      },
    },
    {
      iconBtn: require("../../../../assets/images/minus.png"),
      nameBtn: "Xuất Hàng",
      clickBtn: () => {
        alert("xoa");
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