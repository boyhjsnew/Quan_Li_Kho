import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Toolbar from "../../../../components/Toolbar";
import { useNavigation, useRoute } from "@react-navigation/native";
import COLORS from "../../../../assets/colors/COLORS";
import Ionicons from "@expo/vector-icons/Ionicons";
import insertSupplier from "../../../../redux/actions/actionSuppliers/insertSupplier";
import { useDispatch } from "react-redux";

export default function ScreenAddSuppliers() {
  const route = useRoute();
  const defaultValue = 0;
  // const { paramName = defaultValue } = route.params || {};
  // const Email = paramName.item.email;
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [address, setAdderss] = useState();
  const [name, setName] = useState();
  const [bankdetail, setBankdetails] = useState();
  const [notes, setNotes] = useState();
  const [phone, setPhone] = useState();
  const [taxID, setTaxID] = useState();

  return (
    <View>
      <View>
        <Toolbar
          iconOne="arrow-back-circle"
          title="Thêm Nhà Cung Cấp"
          iconThree="check"
          clickGoBack={() => navigation.goBack()}
          itemThreeClick={() => {
            route.params
              ? alert("Update")
              : insertSupplier(
                  address,
                  bankdetail,
                  email,
                  name,
                  notes,
                  phone,
                  taxID
                );
            navigation.goBack();
          }}
        />
      </View>
      <View style={{ padding: 10 }}>
        <ContentAddSupplier
          address={address}
          setAdderss={setAdderss}
          bankdetail={bankdetail}
          setBankdetails={setBankdetails}
          email={email}
          setEmail={setEmail}
          name={name}
          setName={setName}
          notes={notes}
          setNotes={setNotes}
          phone={phone}
          setPhone={setPhone}
          taxID={taxID}
          setTaxID={setTaxID}
        />
      </View>
    </View>
  );
}
const ContentAddSupplier = (props) => {
  const {
    setAdderss,
    address,
    setBankdetails,
    bankdetail,
    setEmail,
    email,
    setName,
    name,
    setNotes,
    notes,
    setPhone,
    phone,
    setTaxID,
    taxID,
  } = props;

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
        Tên nhà cung cấp
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextInput
          onChangeText={setName}
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
          <Ionicons name="people" size={30} color={"#90929E"}></Ionicons>
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
        Email
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextInput
          value={email}
          onChangeText={setEmail}
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
          <Ionicons name="mail" size={30} color={"#90929E"}></Ionicons>
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
        Số điện thoại
      </Text>
      <TextInput
        onChangeText={setPhone}
        cursorColor={COLORS.primary}
        inputMode="numeric"
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
        Địa chỉ
      </Text>
      <View
        style={{
          height: 65,
          backgroundColor: "white",
          borderRadius: 8,
          paddingLeft: 10,
          paddingEnd: 10,
          color: "black",
          borderWidth: 0.5,
          borderColor: COLORS.border,
        }}
      >
        <TextInput
          onChangeText={setAdderss}
          style={{ paddingTop: 10 }}
          cursorColor={COLORS.primary}
        ></TextInput>
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
        Thông tin ngân hàng
      </Text>
      <TextInput
        onChangeText={setBankdetails}
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
        Mã số thuế
      </Text>
      <TextInput
        onChangeText={setTaxID}
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
        Ghi chú
      </Text>
      <View
        style={{
          height: 80,
          backgroundColor: "white",
          borderRadius: 8,
          paddingLeft: 10,
          paddingEnd: 10,
          color: "black",
          borderWidth: 0.5,
          borderColor: COLORS.border,
        }}
      >
        <TextInput
          onChangeText={setNotes}
          style={{ paddingTop: 10 }}
          cursorColor={COLORS.primary}
        ></TextInput>
      </View>
    </View>
  );
};
