import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import color from "../assets/colors/COLORS";
import imgGoods from "../assets/images/goods.png";
import imgIncoming from "../assets/images/incoming.png";
import imgOutGoing from "../assets/images/outgoing.png";
import imgSuppliers from "../assets/images/suppliers.png";
import imgCustom from "../assets/images/customers.png";
import imgDoc from "../assets/images/documents.png";
export default Dashboard = (props) => {
  const { navigation } = props;

  return (
    <View>
      <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 10 }}>
        Ứng dụng
      </Text>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Good")}
            style={{
              width: 112,
              height: 107,
              backgroundColor: color.white,
              borderRadius: 10,
            }}
          >
            <Image
              style={{ width: 48, height: 48, marginTop: 10, marginLeft: 10 }}
              source={(require = imgGoods)}
            ></Image>
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 9,
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              Hàng hoá
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Incoming")}
            style={{
              width: 112,
              height: 107,
              backgroundColor: color.white,
              borderRadius: 10,
            }}
          >
            <Image
              style={{ width: 48, height: 48, marginTop: 10, marginLeft: 10 }}
              source={(require = imgIncoming)}
            ></Image>
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 9,
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              Nhập hàng
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("OutGoing")}
            style={{
              width: 112,
              height: 107,
              backgroundColor: color.white,
              borderRadius: 10,
            }}
          >
            <Image
              style={{ width: 48, height: 48, marginTop: 10, marginLeft: 10 }}
              source={(require = imgOutGoing)}
            ></Image>
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 9,
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              Xuất hàng
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Suppliers");
            }}
            style={{
              width: 112,
              height: 107,
              backgroundColor: color.white,
              borderRadius: 10,
            }}
          >
            <Image
              style={{ width: 48, height: 48, marginTop: 10, marginLeft: 10 }}
              source={(require = imgSuppliers)}
            ></Image>
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 9,
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              Nhà cung cấp
            </Text>
            <Text
              style={{
                position: "absolute",
                right: 9,
                fontWeight: "bold",
                marginTop: 23,
                fontSize: 14,
              }}
            >
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Customers")}
            style={{
              width: 112,
              height: 107,
              backgroundColor: color.white,
              borderRadius: 10,
            }}
          >
            <Image
              style={{ width: 48, height: 48, marginTop: 10, marginLeft: 10 }}
              source={(require = imgCustom)}
            ></Image>
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 9,
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              Khách hàng
            </Text>
            <Text
              style={{
                position: "absolute",
                right: 9,
                fontWeight: "bold",
                marginTop: 23,
                fontSize: 14,
              }}
            >
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Document")}
            style={{
              width: 112,
              height: 107,
              backgroundColor: color.white,
              borderRadius: 10,
            }}
          >
            <Image
              style={{ width: 48, height: 48, marginTop: 10, marginLeft: 10 }}
              source={(require = imgDoc)}
            ></Image>
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 9,
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              Chứng từ
            </Text>
            <Text
              style={{
                position: "absolute",
                right: 9,
                fontWeight: "bold",
                marginTop: 23,
                fontSize: 14,
              }}
            >
              9
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
