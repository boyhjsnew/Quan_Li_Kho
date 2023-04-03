import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../assets/colors/COLORS";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import SPACING from "../assets/dimens/SPACING";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Toolbar(props) {
  const { header, header_back, header_menu } = styles;
  const navigation = useNavigation();
  const route = useRoute();
  // menu chon kho

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.primary,
        paddingTop: 23,
        paddingBottom: 15,
      }}
    >
      <View style={header}>
        {/* view back */}
        <View style={header_back}>
          {route.name == "Home" ? (
            <TouchableOpacity onPress={props.iconOneClick}>
              <Ionicons
                name={props.iconOne} //"arrow-back-circle"
                color={COLORS.white}
                size={30}
              ></Ionicons>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name={props.iconOne} //"arrow-back-circle"
                color={COLORS.white}
                size={30}
              ></Ionicons>
            </TouchableOpacity>
          )}

          <Text
            style={{
              paddingLeft: SPACING,
              fontSize: 17,
              fontWeight: "500",
              color: "white",
            }}
          >
            {props.title}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FontAwesome
            name={props.iconTwo}
            size={17}
            color="white"
          ></FontAwesome>
          <FontAwesome
            style={{ paddingHorizontal: 20 }}
            name={props.iconThree}
            size={19}
            color="white"
          ></FontAwesome>
          <FontAwesome
            name={props.iconFour}
            size={17}
            color="white"
          ></FontAwesome>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header_back: {
    flexDirection: "row",
    alignItems: "center",
  },
  header_menu: {
    flexDirection: "row",
    alignItems: "center",
  },
});
