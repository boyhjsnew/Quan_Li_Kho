import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import COLORS from "../assets/colors/COLORS";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import SPACING from "../assets/dimens/SPACING";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Toolbar(props) {
  const { header, header_back } = styles;
  const{clickSearch,isSelected}= props
  

  const route = useRoute();
  // menu chon kho
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.primary,
        paddingTop: 23,
        paddingBottom: 15,
        justifyContent: "center",
      }}>
      <View style={header}>
        {/* view back */}
        <View style={header_back}>
          {route.name == "Home" ? (
            <TouchableOpacity onPress={props.iconOneClick}>
              <Ionicons
                name={props.iconOne} //"arrow-back-circle"
                color={COLORS.white}
                size={35}
              ></Ionicons>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={props.clickGoBack}>
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
            }}>
            {props.title}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
        <TouchableOpacity onPress={clickSearch}>
          <FontAwesome
            name={props.iconTwo}
            size={20}
            color="white"
            style={{color:isSelected==true?'#00FF00':COLORS.white}}
          ></FontAwesome>
          </TouchableOpacity>
          {props.iconThree && (
            <TouchableOpacity onPress={props.itemThreeClick}>
              <FontAwesome
                style={{ paddingHorizontal: 20 }}
                name={props.iconThree}
                size={20}
                color="white"
              ></FontAwesome>
            </TouchableOpacity>
          )}
          {props.iconFour && (
            <TouchableOpacity onPress={props.itemFourClick}>
              <FontAwesome
                style={{ paddingRight: 20 }}
                name={props.iconFour}
                size={20}
                color="white"
              ></FontAwesome>
            </TouchableOpacity>
          )}
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
    paddingVertical: Platform.OS === "ios" ? 10 : 0,
  },
  header_back: {
    flexDirection: "row",
    alignItems: "center",
  },
});
