import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import spacing from "../assets/dimens/SPACING";
import color from "../assets/colors/COLORS";
import imgbox from "../assets/images/box.png";
import imgStore from "../assets/images/store.png";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import COLORS from "../assets/colors/COLORS";

export default ContentHeader = (props) => {
  const { navigation } = props;
  return (
    <View style={{ backgroundColor: COLORS.primary }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            width: "81%",
            height: 50,
            backgroundColor: color.secondary,
            borderRadius: 10,
            justifyContent: "center",
            padding: 8,
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("SelectStore")}
            activeOpacity={1}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                color: color.white,
              }}
            >
              Kho hàng Bình Thạnh
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SelectStore")}
              style={{
                width: 28,
                height: 28,
                backgroundColor: COLORS.primary,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name="chevron-right"
                color="white"
                size={13}
              ></FontAwesome>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Stock")}
          style={{
            width: "15%",
            backgroundColor: color.secondary,
            borderRadius: 10,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={(require = imgStore)}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 10 }}>
        <View
          style={{
            height: 55,
            backgroundColor: color.secondary,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              paddingRight: 11,
              height: 43,
              backgroundColor: color.primary,
              borderTopRightRadius: 21.5,
              borderBottomRightRadius: 21.5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={(require = imgbox)}
            ></Image>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              flex: 1,
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ color: color.white }}>Nguồn hàng</Text>
              <Text
                style={{
                  color: color.white,
                  fontSize: spacing * 1.5,
                  fontWeight: "600",
                  alignSelf: "center",
                  paddingTop: 6,
                }}
              >
                627
              </Text>
            </View>
            <View
              style={{
                height: 37,
                borderColor: color.white,
                borderWidth: 0.6,
                opacity: 0.23,
              }}
            ></View>
            <View>
              <Text style={{ color: color.white }}>Giá trị nguồn hàng</Text>
              <Text
                style={{
                  color: color.white,
                  fontSize: spacing * 1.5,
                  fontWeight: 600,
                  alignSelf: "center",
                  paddingTop: 6,
                }}
              >
                0.00 đ
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
