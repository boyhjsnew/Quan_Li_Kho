import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Modal,
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

export default function ScreenOutGoing() {
  const [activeModal, setActiveModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigation = useNavigation();
  const [showCalendar,setShowCalendar]=useState(false)

  const route = useRoute();
  return (
    <View style={{ backgroundColor: COLORS.bg, flex: 1 }}>
      <Toolbar
        title="Xuất hàng"
        iconOne="arrow-back-circle"
        iconTwo="search"
        iconThree="barcode"
        iconFour="ellipsis-v"
        clickSearch={() => setShowSearch(!showSearch)}
        clickGoBack={() => navigation.goBack()}
        itemFourClick={() => setActiveModal(!activeModal)}
      />
      {showSearch && <SearchIncoming />}
      <QuantityGoods />
      <DocumentProperties navigation={navigation} />
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
const QuantityGoods = () => (
  <View style={styles.quantityGood}>
    <View>
      <Text style={styles.textQty}>Tổng nhập: 0</Text>
      <Text style={styles.textQty}>SL: 0 </Text>
    </View>
    <Text style={styles.textTotal}>Tổng tiền: 0đ</Text>
  </View>
);

const DocumentProperties = (props) => {
  const [inputDiscount, setInputDiscount] = useState("0.0");
  const { navigation } = props;
  const [paid, setPaid] = useState(true);
  const [showContentDoc, setShowContentDoc] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  // CALENDER
  const [timeStamp, setTimeStamp] = useState(new Date().getDay());
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  
  const handleInputFocus = () => {
    if (inputDiscount === "0.0") {
      setInputDiscount("");
    }
  };
  return (
    <View>
      <View style={styles.documentProperties}>
        <View>
          <View>
            <Text style={{ color: "white", fontWeight: "400" }}>
              Document Properties
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
              marginTop: 7,
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
                Document's date
              </Text>
              <TouchableWithoutFeedback
                onPress={() => {
                  setShowCalendar(true);
                }}
              >
                <View
                  style={{
                    justifyContent:'center',
                    height: 40,
                    backgroundColor: COLORS.white,
                    borderRadius: 10,
                    paddingLeft:10,
                  }}
                >
                   <Text style={{fontSize:17}}>{day}/{month}/{year}</Text>
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
                Document's No
              </Text>
              <TextInput
                style={{
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
              Customer
            </Text>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.push("Customers");
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: COLORS.white,
                  justifyContent: "center",
                }}
              >
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
              Discount
            </Text>
            <TextInput
              inputMode="numeric"
              
              value={inputDiscount}
              onChangeText={setInputDiscount}
              onFocus={handleInputFocus}
              style={{
                width: "100%",
                height: 40,
                fontSize:17,
                fontWeight:"400",
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
              Comment
            </Text>
            <TextInput
              style={{
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
        <View style={{backgroundColor:'rgba(0, 0, 0, 0.5)',flex:1}}>
          <View
            style={{
              position: "absolute",
              width: "80%",
              alignSelf: "center",
              top: 130,

            }}>
            <ModalCalendar handleClose={()=>{setShowCalendar(false)}} setShowCalendar={setShowCalendar} setDayNew={setDay} setMonthNew={setMonth} setYearNew={setYear} setTimNew/>
          </View>
          </View>
        </Modal>
        
      
      
    </View>
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
});
