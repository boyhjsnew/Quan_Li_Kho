import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageComponent,
} from "react-native";
import React, { useEffect } from "react";
import COLORS from "../assets/colors/COLORS";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export default function SearchSupplier(props) {
  const { inputSearch, setInputSearch } = props;
  const [changeActiveSearch, setChangeActiveSearch] = useState(false);
  useEffect(() => {
    if (inputSearch == "") {
      setChangeActiveSearch(false);
    }
  }, [inputSearch]);
  return (
    <View
      style={{
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginHorizontal: 3,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 43,
          borderRadius: 10,
          borderColor: "#D3D3D3",
          borderWidth: 1,
          backgroundColor: COLORS.white,
          paddingHorizontal: 10,
          justifyContent: "center",
        }}
      >
        <TextInput
          value={inputSearch}
          placeholder="Tìm tên"
          style={{ marginLeft: 30 }}
          onChangeText={(text) => {
            setInputSearch(text);
            setChangeActiveSearch(true);
          }}
        />
        {changeActiveSearch ? (
          <TouchableOpacity
            style={{ position: "absolute", paddingLeft: 10 }}
            onPress={() => setInputSearch("")}
          >
            <Ionicons size={23} name="arrow-back" color="gray"></Ionicons>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={{ position: "absolute", paddingLeft: 10 }}>
            <Ionicons size={23} name="search" color="gray"></Ionicons>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
