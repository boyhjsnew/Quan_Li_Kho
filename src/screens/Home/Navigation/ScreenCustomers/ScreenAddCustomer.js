import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Toolbar from "../../../../components/Toolbar";
import { useNavigation, useRoute } from "@react-navigation/native";
import COLORS from "../../../../assets/colors/COLORS";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import insertCustomer from "../../../../redux/actions/actionCustomers/insertCustomers";
import updateCustomer from "../../../../redux/actions/actionCustomers/updateCustomer";

export default function ScreenAddCustomer() {
  const navigation = useNavigation();
  const route = useRoute();
  const Email = route.params.item.email;
  const Adresss = route.params.item.address;
  const Name = route.params.item.name;
  const Bankdetail = route.params.item.bankdetail;
  const Notes = route.params.item.notes;
  const Phone = route.params.item.phone;
  const TaxID = route.params.item.taxID;
  const Discount = route.params.item.discount;
  const id = route.params.item.id;

  const [emailCustomer, setEmail] = useState(Email);
  const [address, setAdderss] = useState(Adresss);
  const [name, setName] = useState(Name);
  const [bankdetail, setBankdetails] = useState(Bankdetail);
  const [notes, setNotes] = useState(Notes);
  const [phone, setPhone] = useState(Phone);
  const [taxID, setTaxID] = useState(TaxID);
  const [discount, setDiscount] = useState(Discount);
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Toolbar
          iconOne="arrow-back-circle"
          title="Thêm Khách Hàng"
          iconThree="check"
          clickGoBack={() => navigation.goBack()}
          itemThreeClick={() => {
            navigation.goBack();
            route.params.item === "ADD"
              ? insertCustomer(
                  address,
                  bankdetail,
                  emailCustomer,
                  name,
                  notes,
                  phone,
                  discount,
                  taxID
                )
              : updateCustomer(
                  id,
                  address,
                  bankdetail,
                  emailCustomer,
                  name,
                  notes,
                  phone,
                  taxID,
                  discount
                );
          }}
        />
      </View>
      <ScrollView
        style={{ padding: 10 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <ContentAddCustomer
          address={address}
          setAdderss={setAdderss}
          bankdetail={bankdetail}
          setBankdetails={setBankdetails}
          emailCustomer={emailCustomer}
          setEmail={setEmail}
          name={name}
          setName={setName}
          notes={notes}
          setNotes={setNotes}
          phone={phone}
          discount={discount}
          setDiscount={setDiscount}
          setPhone={setPhone}
          taxID={taxID}
          setTaxID={setTaxID}
        />
      </ScrollView>
    </View>
  );
}
const ContentAddCustomer = (props) => {
  const {
    setAdderss,
    address,
    setBankdetails,
    bankdetail,
    setEmail,
    emailCustomer,
    setName,
    name,
    setNotes,
    notes,
    setPhone,
    phone,
    setTaxID,
    taxID,
    discount,
    setDiscount,
  } = props;
  return (
    <View>
      <Text
        style={{
          color: "#90929E",
          fontSize: 16,
          fontWeight: "700",
          marginVertical: 6,
        }}
      >
        Tên khách hàng
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextInput
          onChangeText={setName}
          value={name}
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
          value={emailCustomer}
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
        value={phone}
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
      <TextInput
        value={address}
        onChangeText={setAdderss}
        cursorColor={COLORS.primary}
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
        Thông tin ngân hàng
      </Text>
      <TextInput
        value={bankdetail}
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
        value={taxID}
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
        Giảm giá
      </Text>
      <TextInput
        onChangeText={setDiscount}
        value={discount}
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
          height: 100,
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
          value={notes}
          style={{
            paddingTop: 10,
          }}
          cursorColor={COLORS.primary}
        ></TextInput>
      </View>
    </View>
  );
};
