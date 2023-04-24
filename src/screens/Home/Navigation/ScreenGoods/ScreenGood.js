import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { MenuProvider } from "react-native-popup-menu";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
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
import { useDispatch, useSelector } from "react-redux";
import deleteProducts from "../../../../redux/actions/actionProducts/deleteProducts";

export default function ScreenGood({ navigation, ...props }) {
  const { fullIcon } = props;
  const [activeModal, setActiveModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const PRODUCTS = useSelector((state) => state.productsReducer.items);
  const [dislayBottom, setDislayBottom] = useState(true);
  const listStore = useSelector((state) => state.warehouseReducer.items);
  const idStorePick =
    listStore
      .filter((item) => item.isPicked === true)
      .map((item) => item.id)[0] ?? null;

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   getTotalQuantity(idStorePick.join(""), dispatch);
  // }, []);

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
      <QuantityGoods PRODUCTS={PRODUCTS} />
      {showSearch && <Search />}
      <MenuProvider>
        <ItemGoods
          idStorePick={idStorePick}
          navigation={navigation}
          PRODUCTS={PRODUCTS}
          setDislayBottom={setDislayBottom}
        />
      </MenuProvider>

      {dislayBottom && <BottomTabs fullIcon={fullIcon} />}
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
  // const quantityProducts = useSelector((state) => state.quantityReducer.items);

  // const getQuantity = (idProduct) => {
  //   const product = quantityProducts.find(
  //     (item) => item.productId === idProduct
  //   );
  //   return product ? product.quantity : 0;
  // };
  const naviagtion = useNavigation();
  const { PRODUCTS, idStorePick } = props;
  const documents = useSelector((state) => state.documentsReducer.items);
  function getProductQuantity(productId, documents, idStorePick) {
    const filteredDocuments = documents.filter(
      (doc) => doc.productId === productId && doc.idStore === idStorePick
    );
    const totalInStock = filteredDocuments.reduce(
      (acc, doc) => acc + (doc.QuaInStock || 0),
      0
    );
    const totalOutStock = filteredDocuments.reduce(
      (acc, doc) => acc + (doc.QuaOutStock || 0),
      0
    );
    return totalInStock - totalOutStock;
  }

  return (
    <FlatList
      onEndReachedThreshold={0}
      showsVerticalScrollIndicator={false}
      onScrollBeginDrag={() => props.setDislayBottom(false)}
      onScrollEndDrag={() => props.setDislayBottom(true)}
      data={PRODUCTS}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              naviagtion.push("EditGoods", {
                item: item,
              });
            }}
            style={styles.rowGoods}
          >
            <View style={styles.leftRow}>
              {item.image[0] != "null" ? (
                <Image
                  source={{ uri: item.image[0] }}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 100,
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
                    paddingVertical: 7,
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
                  justifyContent: "space-around",
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    alignSelf: "flex-end",
                  }}
                >
                  {getProductQuantity(item.id, documents, idStorePick)}
                </Text>
                <View
                  style={{
                    width: 110,
                    justifyContent: "flex-end",

                    flexDirection: "row",
                    paddingTop: 5,
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
              <PopUpMenu
                deleteProducts={() => {
                  deleteProducts(item.id);
                }}
              />
            </View>
          </TouchableOpacity>
        );
      }}
    ></FlatList>
  );
};
const QuantityGoods = (props) => {
  const PRODUCTS = props.PRODUCTS;

  // PRODUCTS.map((item) => {
  //   console.log(Math.floor(item.priceSale));
  // });
  // const totalPricePurcharse = PRODUCTS.reduce(
  //   (total, curren) => total + Number(curren.pricePurcharse),
  //   0
  // );

  // const totalPriceSale = PRODUCTS.reduce(
  //   (total, curren) => total + Number(curren.priceSale),
  //   0
  // );
  return (
    <View style={styles.quantityGood}>
      <Text style={styles.textQty}>SL: 246</Text>
      <Text style={styles.textQty}>
        Tổng tiền:
        {}
        đ/
        {}đ{" "}
      </Text>
    </View>
  );
};
const BottomTabs = (props) => {
  const { fullIcon } = props;

  const navigation = useNavigation();
  return (
    <View style={styles.bottomTab}>
      <View style={styles.leftTab}>
        <FontAwesome
          name="folder-open-o"
          size={20}
          color={COLORS.white}
        ></FontAwesome>
        {fullIcon == true ? (
          <Ionicons
            name="copy-outline"
            size={20}
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

const PopUpMenu = (props) => {
  return (
    <Menu>
      <MenuTrigger>
        <Ionicons name="ellipsis-vertical" size={20} color="gray"></Ionicons>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={() => alert(`Dong 278`)}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              style={{ padding: 10 }}
              name="stopwatch-outline"
              size={20}
              color="#293855"
            ></Ionicons>
            <Text
              style={{
                color: "black",
                fontSize: 16,
                paddingVertical: 9,
                paddingHorizontal: 8,
              }}
            >
              Lịch sử
            </Text>
          </View>
        </MenuOption>
        <MenuOption onSelect={() => alert(`287`)}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              style={{ padding: 10 }}
              name="alert-circle"
              size={20}
              color="#293855"
            ></Ionicons>
            <Text
              style={{
                color: "black",
                fontSize: 16,
                paddingVertical: 9,
                paddingHorizontal: 8,
              }}
            >
              Số lượng tất cả kho
            </Text>
          </View>
        </MenuOption>
        <MenuOption onSelect={props.deleteProducts}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              style={{ padding: 10 }}
              name="trash-bin"
              size={20}
              color="#293855"
            ></Ionicons>
            <Text
              style={{
                color: "black",
                fontSize: 16,
                paddingVertical: 9,
                paddingHorizontal: 8,
              }}
            >
              Xóa bỏ
            </Text>
          </View>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Share 306`)}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              style={{ padding: 10 }}
              name="share-social"
              size={20}
              color="#293855"
            ></Ionicons>
            <Text
              style={{
                color: "black",
                fontSize: 16,
                paddingVertical: 9,
                paddingHorizontal: 8,
              }}
            >
              Chia sẻ
            </Text>
          </View>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};
const styles = StyleSheet.create({
  rowGoods: {
    elevation: 1,
    backgroundColor: "white",
    marginVertical: 6,
    flexDirection: "row",
    paddingHorizontal: 17,
    paddingVertical: 7,
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
