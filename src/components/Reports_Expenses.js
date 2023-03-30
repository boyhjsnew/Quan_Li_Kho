import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import imgInventory from "../assets/images/report.png";
import imgExpenses from "../assets/images/expenses.png";
import color from "../assets/colors/COLORS";
export default Reports_Expenses = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Text style={{ fontSize: 16, fontWeight: "600", marginVertical: 10 }}>
        Báo cáo và chi phí
      </Text>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Report");
          }}
          style={{
            width: "100%",
            height: 65,
            backgroundColor: color.white,
            borderRadius: 10,
            justifyContent: "center",
            marginBottom: 13,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{ width: 48, height: 48, marginStart: 10 }}
              source={imgInventory}
            ></Image>
            <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: "600" }}>
              Báo cáo
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Expense");
          }}
          style={{
            width: "100%",
            height: 65,
            backgroundColor: color.white,
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{ width: 48, height: 48, marginStart: 10 }}
              source={imgExpenses}
            ></Image>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 13,
                  fontWeight: "500",
                  marginBottom: 6,
                }}
              >
                Chi phí
              </Text>
              <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: "600" }}>
                0.00 đ
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
