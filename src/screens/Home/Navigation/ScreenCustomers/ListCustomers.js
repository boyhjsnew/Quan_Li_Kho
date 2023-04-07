import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../../../../assets/colors/COLORS";
import { CUSTOMERS } from "../../../../data/customers";

export default function ListCustomers(props) {
  return (
    <View>
      {CUSTOMERS.map((customer, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={props.clickToAddCustomer}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "white",
              padding: 10,
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: COLORS.border,
                  borderRadius: 19,
                }}
              ></View>
              <Text style={{ fontWeight: "700", paddingHorizontal: 10 }}>
                {customer.customer}
              </Text>
            </View>
            <TouchableOpacity
              style={{ flexDirection: "row", padding: 10 }}
              onPress={props.clickItemCustomers}
            >
              <Text
                style={{
                  paddingHorizontal: 1,
                  fontSize: 5,
                  color: "#8E8D95",
                }}
              >
                {"\u2B24"}
              </Text>
              <Text
                style={{
                  paddingHorizontal: 1,
                  fontSize: 5,
                  color: "#8E8D95",
                }}
              >
                {"\u2B24"}
              </Text>
              <Text
                style={{
                  paddingHorizontal: 1,
                  fontSize: 5,
                  color: "#8E8D95",
                }}
              >
                {"\u2B24"}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
