import { useNavigation } from "@react-navigation/native";

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Modal,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import ModalCalendar from "../../../../components/Calendar";
import COLORS from "../../../../assets/colors/COLORS";
import Toolbar from "../../../../components/Toolbar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ButtonAdd from "../../../../components/ButtonAdd";
import ModalMenu from "../../../../components/ModalMenu";
import SearchIncoming from "../../../../components/SearchIncoming";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import updateDocuments from "../../../../redux/actions/actionDocuments.js/updateDocuments";
import formatCurrency from "../../../../utils/formatCurrency";

export default function ScreenOutGoing({ route }) {
  const [activeModal, setActiveModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigation = useNavigation();
  const [showCalendar, setShowCalendar] = useState(false);
  const ITEM_FROM_DOCS = useSelector((state) => state.pickDocument.items);

  const itemPickCus = useSelector((state) => state.pickCustomerReducer.items);
  listPro = useSelector((state) => state.productsReducer.items);

  const getProducts = () => {
    const product = listPro.find(
      (item) => item.id === ITEM_FROM_DOCS.productId
    );
    return product ? product : "";
  };
  const dispatch = useDispatch();

  const amount =
    getProducts && getProducts().priceSale * ITEM_FROM_DOCS.QuaOutStock;

  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1 }}>
      <Toolbar
        title="Xuất hàng"
        iconOne="arrow-back-circle"
        iconTwo="search"
        iconThree="barcode"
        iconFour="ellipsis-v"
        clickSearch={() => setShowSearch(!showSearch)}
        clickGoBack={() => {
          navigation.goBack();
          dispatch({
            type: "PICK_DOCUMENT",
            payload: "",
          });
        }}
        itemFourClick={() => setActiveModal(!activeModal)}
      />
      {showSearch && <SearchIncoming />}
      <QuantityGoods ITEM_FROM_DOCS={ITEM_FROM_DOCS} amount={amount} />
      <DocumentProperties
        navigation={navigation}
        itemPickCus={itemPickCus}
        ITEM_FROM_DOCS={ITEM_FROM_DOCS}
      />
      {ITEM_FROM_DOCS && (
        <ItemGoodForOut
          getProducts={getProducts}
          ITEM_FROM_DOCS={ITEM_FROM_DOCS}
        />
      )}
      <ModalMenu
        itemSort="sort"
        itemPrintExcel="print"
        itemListSetting="list-ul"
        itemHelp="info-circle"
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        route={route.name}
      />
      <ButtonAdd
        clickAdd={() => navigation.push("NavGood", { fullIcon: false })}
      />
    </View>
  );
}

const QuantityGoods = (props) => (
  <View style={styles.quantityGood}>
    <View>
      <Text style={styles.textQty}>Tổng Xuất: 1</Text>
      <Text style={styles.textQty}>
        SL: {props.ITEM_FROM_DOCS.QuaOutStock}{" "}
      </Text>
    </View>
    <Text style={styles.textTotal}>
      Tổng tiền: {formatCurrency(props.amount ? props.amount : 0)}đ
    </Text>
  </View>
);

const DocumentProperties = (props) => {
  listCus = useSelector((state) => state.customersReducer.items);
  const { ITEM_FROM_DOCS, itemPickCus } = props;
  const getCustomer = () => {
    const customer = listCus.find(
      (item) => item.id === ITEM_FROM_DOCS.idCustomer
    );
    return customer ? customer : "";
  };

  const [inputDiscount, setInputDiscount] = useState(getCustomer().discount);
  const { navigation } = props;
  const [paid, setPaid] = useState(ITEM_FROM_DOCS ? ITEM_FROM_DOCS.paid : true);
  const [notes, setNotes] = useState(
    ITEM_FROM_DOCS ? ITEM_FROM_DOCS.notes : ""
  );
  const [showContentDoc, setShowContentDoc] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const route = useRoute();

  const [nameCus, setNameCus] = useState(
    getCustomer() ? getCustomer().name : ""
  );

  // CALENDER
  const [timeStamp, setTimeStamp] = useState(new Date().getDay());
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const handleInputFocus = () => {
    setInputDiscount("");
  };
  useEffect(() => {
    if (ITEM_FROM_DOCS) {
      updateDocuments(ITEM_FROM_DOCS.idDoc, paid, notes);
    }
  }, [paid, notes]);

  return (
    <View>
      <View style={styles.documentProperties}>
        <View>
          <View>
            <Text style={{ color: "white", fontWeight: "400" }}>
              Thông tin phiếu xuất
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={paid ? styles.switchPaid : styles.switchUnPaid}
            activeOpacity={1}
            onPress={() => setPaid(!paid)}
          >
            <View>
              <View style={styles.paid}></View>
            </View>
            <Text
              style={{
                fontSize: 9,
                fontWeight: "700",
                color: "white",
              }}
            >
              {paid ? "PAID" : "UNPAID"}
            </Text>
            <View style={{ paddingHorizontal: 2 }}></View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.subMenu}
            onPress={() => setShowContentDoc(!showContentDoc)}
          >
            {showContentDoc === false ? (
              <FontAwesome name="angle-down" size={29} color={COLORS.white} />
            ) : (
              <FontAwesome
                name="angle-up"
                size={29}
                color={COLORS.white}
                style={{ bottom: 1 }}
              ></FontAwesome>
            )}
          </TouchableOpacity>
        </View>
      </View>
      {showContentDoc && (
        <View
          style={{
            backgroundColor: COLORS.secondary,
            paddingHorizontal: 10,
            marginHorizontal: 15,
            marginTop: -25,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <View
            style={{
              width: "97%",
              borderWidth: 0.3,
              alignSelf: "center",
              borderColor: COLORS.white,
              marginTop: 10,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              paddingTop: 10,
            }}
          >
            <View style={{ width: "48%" }}>
              <Text
                style={{
                  paddingBottom: 7,
                  color: COLORS.white,
                  fontWeight: "700",
                  fontSize: 16,
                }}
              >
                Ngày Xuất
              </Text>
              <TouchableWithoutFeedback
                onPress={() => {
                  setShowCalendar(true);
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    height: 40,
                    backgroundColor: COLORS.white,
                    borderRadius: 10,
                    paddingLeft: 10,
                  }}
                >
                  <Text style={{ fontSize: 17 }}>
                    {ITEM_FROM_DOCS.createAt}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={{ width: "48%" }}>
              <Text
                style={{
                  paddingBottom: 7,
                  color: COLORS.white,
                  fontWeight: "700",
                  fontSize: 16,
                }}
              >
                Số phiếu xuất
              </Text>
              <TextInput
                value={ITEM_FROM_DOCS.id}
                style={{
                  fontSize: 17,
                  height: 40,
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                  padding: 10,
                }}
              ></TextInput>
            </View>
          </View>
          <View>
            <Text
              style={{
                paddingVertical: 7,
                color: COLORS.white,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Khách hàng
            </Text>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.push("Customers", { from: "fromOutgoing" });
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: COLORS.white,
                  justifyContent: "center",
                  paddingHorizontal: 10,
                }}
              >
                <Text style={{ fontSize: 16 }}>{nameCus}</Text>
                <Ionicons
                  name="chevron-forward"
                  style={{ right: 3, position: "absolute" }}
                  size={30}
                ></Ionicons>
              </View>
            </TouchableWithoutFeedback>
            <Text
              style={{
                paddingVertical: 7,
                color: COLORS.white,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Chiết khấu
            </Text>
            <TextInput
              inputMode="numeric"
              value={inputDiscount}
              onChangeText={setInputDiscount}
              onFocus={handleInputFocus}
              style={{
                width: "100%",
                height: 40,
                fontSize: 17,
                fontWeight: "400",
                backgroundColor: COLORS.white,
                borderRadius: 9,
                paddingLeft: 10,
              }}
            ></TextInput>
            <Text
              style={{
                paddingVertical: 7,
                color: COLORS.white,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Ghi chú
            </Text>
            <TextInput
              onChangeText={setNotes}
              numberOfLines={1}
              value={notes}
              style={{
                fontSize: 17,
                width: "100%",
                height: 40,
                backgroundColor: COLORS.white,
                borderRadius: 9,
                marginBottom: 15,
                paddingLeft: 5,
              }}
            ></TextInput>
          </View>
        </View>
      )}

      <Modal visible={showCalendar} transparent={true}>
        <View style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", flex: 1 }}>
          <View
            style={{
              position: "absolute",
              width: "80%",
              alignSelf: "center",
              top: 130,
            }}
          >
            <ModalCalendar
              handleClose={() => {
                setShowCalendar(false);
              }}
              setShowCalendar={setShowCalendar}
              setDayNew={setDay}
              setMonthNew={setMonth}
              setYearNew={setYear}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const ItemGoodForOut = (props) => {
  const { getProducts } = props;
  const { ITEM_FROM_DOCS } = props;

  return (
    <TouchableOpacity onPress={() => {}} style={styles.rowGoods}>
      <View style={styles.leftRow}>
        {
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
        }
        {/* info goood */}
        <View>
          <Text
            style={{
              paddingHorizontal: 10,
              fontWeight: "500",
            }}
          >
            {/* name good */}
            {getProducts().nameproduct}
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
              {getProducts().barcode}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.rightRow}>
        <Text
          style={{
            fontWeight: "500",
          }}
        >
          {ITEM_FROM_DOCS.QuaOutStock + ""}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  quantityGood: {
    marginBottom: 5,
    paddingVertical: 3,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.secondary,
    alignItems: "center",
  },
  textQty: {
    color: "white",
    fontWeight: "700",
  },
  textTotal: {
    color: "white",
    fontWeight: "700",
    alignSelf: "flex-end",
  },
  documentProperties: {
    margin: 15,
    height: 50,
    borderRadius: 8,
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  switchPaid: {
    backgroundColor: "#4DA55A",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 100,
    height: 24,
    width: 60,
    justifyContent: "space-between",
  },
  switchUnPaid: {
    backgroundColor: "#FA3850",
    alignItems: "center",
    flexDirection: "row-reverse",
    borderRadius: 100,
    height: 24,
    width: 60,
  },

  paid: {
    width: 17,
    height: 17,
    backgroundColor: "white",
    borderRadius: 100,
    margin: 3,
  },
  subMenu: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    height: 30,
    width: 30,
    borderRadius: 100,
    marginLeft: 10,
  },
  rowGoods: {
    elevation: 1,
    backgroundColor: "white",
    marginVertical: 6,
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingVertical: 7,
    justifyContent: "space-between",
  },
  leftRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightRow: {
    alignItems: "center",
    justifyContent: "center",
  },
});
