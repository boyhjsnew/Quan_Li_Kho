import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import COLORS from "../../../../assets/colors/COLORS";
import Toolbar from "../../../../components/Toolbar";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ModalMenu from "../../../../components/ModalMenu";
import { GOODS } from "../../../../data/goods";
import Search from "../../../../components/Search";
import HeaderNameStore from "../../../../components/HeaderNameStore";
import { useSelector } from "react-redux";

export default function ScreenGood({ navigation, ...props }) {
  const { fullIcon } = props;
  const [activeModal, setActiveModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const PRODUCTS = useSelector((state) => state.productsReducer.items);

  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1 }} activeOpacity={1}>
      <Toolbar
        title="Hàng Hoá"
        iconOne="arrow-back-circle"
        iconTwo="search"
        isSelected={showSearch}
        iconThree="ellipsis-v"
        clickSearch={() => setShowSearch(!showSearch)}
        clickGoBack={() => navigation.goBack()}
        itemThreeClick={() => setActiveModal(!activeModal)}
      />
      <HeaderNameStore />
      <QuantityGoods />
      {showSearch && <Search />}
      <ItemGoods navigation={navigation} PRODUCTS={PRODUCTS} />
      <BottomTabs fullIcon={fullIcon} />
      <ModalMenu
        itemPrintExcel="print"
        itemListSetting="list-ul"
        itemShowQuantity="md-analytics-outline"
        itemHideGroup="group"
        itemHelp="info-circle"
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
    </View>
  );
}

const ItemGoods = (props) => {
  const naviagtion = useNavigation();
  const { PRODUCTS } = props;
  return (
    <FlatList
      data={PRODUCTS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              naviagtion.push("EditGoods");
            }}
            style={styles.rowGoods}
          >
            <View style={styles.leftRow}>
              {item ? (
                <Image
                  source={{ uri: item.image[0] }}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 100,
                    backgroundColor: COLORS.secondary,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Image>
              ) : (
                <Image
                  source={require(".././../../.././assets/images/image.png")}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 100,
                    backgroundColor: COLORS.secondary,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Image>
              )}
              {/* info goood */}
              <View>
                <Text
                  style={{
                    paddingHorizontal: 10,
                    fontWeight: "500",
                  }}
                >
                  {/* name good */}
                  {item.nameproduct}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    paddingVertical: 5,
                  }}
                >
                  <FontAwesome
                    color="#807F80"
                    style={{ paddingLeft: 10, paddingRight: 5, marginTop: 1 }}
                    size={15}
                    name="barcode"
                  ></FontAwesome>
                  <Text style={{ fontSize: 12, opacity: 0.5 }}>
                    {item.barcode}
                  </Text>
                </View>
                <Text
                  style={{ paddingLeft: 10, opacity: 0.5, width: 220 }}
                  numberOfLines={1}
                >
                  {item.description}
                </Text>
              </View>
            </View>
            <View style={styles.rightRow}>
              <View
                style={{
                  paddingVertical: 10,
                  height: "100%",
                  justifyContent: "space-around",
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    alignSelf: "flex-end",
                  }}
                >
                  {"0.0"}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  {/* gia nhap gia ban */}
                  <Text style={{ color: "#fd89b6" }}>
                    {item.pricePurcharse}đ
                  </Text>
                  <View>
                    <Text>/</Text>
                  </View>
                  <Text style={{ color: "#02b5ef" }}>{item.priceSale}đ</Text>
                </View>
              </View>
              <TouchableOpacity style={{ paddingTop: 1, marginVertical: 20 }}>
                <Ionicons
                  name="ellipsis-vertical"
                  size={25}
                  color="gray"
                ></Ionicons>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      }}
    ></FlatList>
  );
};
const QuantityGoods = () => (
  <View style={styles.quantityGood}>
    <Text style={styles.textQty}>
      SL:{" "}
      {GOODS.reduce((total, curr) => {
        return total + curr.quantity;
      }, 0)}
    </Text>
    <Text style={styles.textQty}>
      Tổng tiền:
      {GOODS.reduce((total, curren) => total + curren.purchasePrice, 0)}đ/
      {GOODS.reduce((total, curren) => total + curren.salePrice, 0)}đ{" "}
    </Text>
  </View>
);
const BottomTabs = (props) => {
  const { fullIcon } = props;

  const navigation = useNavigation();
  return (
    <View style={styles.bottomTab}>
      <View style={styles.leftTab}>
        <FontAwesome
          name="folder-open-o"
          size={23}
          color={COLORS.white}
        ></FontAwesome>
        {fullIcon == true ? (
          <Ionicons
            name="copy-outline"
            size={23}
            color={COLORS.white}
          ></Ionicons>
        ) : (
          <View style={{ width: 23, height: 23 }}></View>
        )}
      </View>
      <View>
        <View style={styles.midTab}>
          <TouchableOpacity
            onPress={() => navigation.push("AddGoods")}
            style={styles.btnAddGoods}
            activeOpacity={0.5}
          >
            <Image
              style={{ height: 25, width: 25 }}
              source={require("../../../../assets/images/download.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.midTab2}></View>
      </View>
      <View style={styles.rightTab}>
        {fullIcon == true ? (
          <FontAwesome
            name="sort-amount-asc"
            size={17}
            color="white"
          ></FontAwesome>
        ) : (
          <View style={{ width: 23, height: 23 }}></View>
        )}

        {fullIcon == true ? (
          <FontAwesome
            name="check-square"
            size={17}
            color="white"
          ></FontAwesome>
        ) : (
          <View style={{ width: 23, height: 23 }}></View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowGoods: {
    elevation: 1,
    backgroundColor: "white",
    marginVertical: 6,
    flexDirection: "row",
    paddingHorizontal: 17,
    paddingVertical: 5,
    justifyContent: "space-between",
  },
  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  rightRow: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 0.7,
  },
  bottomTab: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  leftTab: {
    paddingVertical: 10,
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    height: 55,
    width: "48%",
    borderTopRightRadius: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  rightTab: {
    backgroundColor: COLORS.primary,
    height: 55,
    width: "48%",
    borderTopLeftRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  midTab: {
    backgroundColor: COLORS.bg,
    height: 27,
    width: 50,
    borderRadius: 15,
    marginBottom: 15,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    position: "relative",
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  midTab2: {
    height: 45,
    position: "absolute",
    backgroundColor: COLORS.primary,
    bottom: -10,
    left: 0,
    right: 0,
  },
  btnAddGoods: {
    marginBottom: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 43,
    width: 43,
    borderRadius: 100,
    backgroundColor: COLORS.primary,
    elevation: 5,
  },
  quantityGood: {
    marginBottom: 5,
    paddingVertical: 3,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.secondary,
  },
  textQty: {
    color: "white",
    fontWeight: "700",
  },
});
