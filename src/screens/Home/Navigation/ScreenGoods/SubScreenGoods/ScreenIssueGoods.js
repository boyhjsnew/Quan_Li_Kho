import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import Toolbar from "../../../../../components/Toolbar";
import COLORS from "../../../../../assets/colors/COLORS";

import ModalCalendar from "../../../../../components/Calendar";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import formatIDDocuments from "../../../../../utils/formatId";

export default function ScreenIssueGoods({ navigation }) {
  const route = useRoute();
  const [showCalendar, setShowCalendar] = useState(false);
  const navigationSub = useNavigation();
  const [showList, setShowList] = useState(false);
  const [customer, setCustomer] = useState([]);
  const [quantity, setQuantity] = useState();
  const [notes, setNotes] = useState("");
  const typeDocument = "instock";
  // store pick
  const listStore = useSelector((state) => state.warehouseReducer.items);
  // item product from redux
  const itemProduct = useSelector((state) => state.pickProduct.items);
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [document, setDocument] = useState({
    item: "",
  });
  const listDocument = useSelector((state) => state.documentsReducer.items);

  // idStore
  const idStorePick = listStore.map((item) => {
    var id = "";
    if (item.isPicked == false) {
      id = item.id;
    }
    return id;
  });
  const instockItems = listDocument.filter(
    (item) => item.typeDocument == "outstock"
  );

  console.log("sdhgsdhsgdsd", instockItems);

  useEffect(() => {
    const dataDocuments = {
      QuaOutStock: Number(quantity),
      createAt: `${day}/${month}/${year}`,
      idCustomer: "null",
      idStore: idStorePick.join(""),
      idCustomer: customer.id,
      notes: notes,
      id: formatIDDocuments(instockItems.length + 1),
      typeDocument: "outstock",
      paid: 1,
    };
    console.log(dataDocuments);
    setDocument({ ...document, item: dataDocuments });
  }, [quantity, day, month, year, customer, notes]);
  return (
    <View>
      <Toolbar
        iconOne="arrow-back-circle"
        title="Xuất hàng"
        iconThree="check"
        itemThreeClick={() => navigation.goBack()}
        clickGoBack={() => navigation.goBack()}
      />
      <ContentIssueGoods
        showCalendar={showCalendar}
        showList={showList}
        customer={customer}
        quantity={quantity}
        notes={notes}
        day={day}
        month={month}
        year={year}
        setShowCalendar={setShowCalendar}
        setShowList={setShowList}
        setCustomer={setCustomer}
        setQuantity={setQuantity}
        setNotes={setNotes}
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
      />
    </View>
  );
}
const ContentIssueGoods = (props) => {
  const {
    showList,
    customer,
    quantity,
    notes,
    day,
    month,
    year,
    showCalendar,
    setShowCalendar,
    setShowList,
    setCustomer,
    setQuantity,
    setNotes,
    setDay,
    setMonth,
    setYear,
  } = props;

  return (
    <View>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            color: "#90929E",
            fontSize: 16,
            fontWeight: "700",
            marginVertical: 6,
            paddingTop: 10,
          }}
        >
          Số Lượng
        </Text>
        <TextInput
          value={quantity}
          onChangeText={setQuantity}
          cursorColor={COLORS.primary}
          style={{
            height: 40,
            backgroundColor: "white",
            borderRadius: 8,
            paddingLeft: 10,
            paddingEnd: 10,
            color: "black",
            borderWidth: 0.5,
            borderColor: COLORS.border,
          }}
        ></TextInput>
        <Text
          style={{
            color: "#90929E",
            fontSize: 16,
            fontWeight: "700",
            marginVertical: 6,
            paddingTop: 10,
          }}
        >
          Ngày Xuất
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => {
              setShowCalendar(true);
            }}
            cursorColor={COLORS.primary}
            style={{
              justifyContent: "center",
              width: "100%",
              height: 40,
              backgroundColor: "white",
              borderRadius: 8,
              paddingLeft: 10,
              paddingEnd: 10,
              color: "black",
              borderWidth: 0.5,
              borderColor: COLORS.border,
            }}
          >
            <Text style={{ fontSize: 17 }}>
              {day}/{month}/{year}
            </Text>
          </TouchableOpacity>
          {/* CLICK QR_CODE */}
        </View>
        <Text
          style={{
            color: "#90929E",
            fontSize: 16,
            fontWeight: "700",
            marginVertical: 6,
            paddingTop: 10,
          }}
        >
          Khách hàng
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setShowList(!showList)}
          cursorColor={COLORS.primary}
          style={{
            height: 40,
            backgroundColor: "white",
            borderRadius: 8,
            paddingLeft: 10,
            paddingEnd: 10,
            color: "black",
            justifyContent: "center",
            borderWidth: 0.5,
            borderColor: COLORS.border,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16 }}>{customer.name}</Text>
          {!showList ? (
            <FontAwesome
              name="angle-down"
              size={27}
              color={COLORS.secondary}
            ></FontAwesome>
          ) : (
            <FontAwesome
              name="angle-right"
              size={27}
              color={COLORS.secondary}
            ></FontAwesome>
          )}
        </TouchableOpacity>
        <Text
          style={{
            color: "#90929E",
            fontSize: 16,
            fontWeight: "700",
            marginVertical: 6,
            paddingTop: 10,
          }}
        >
          Bình luận
        </Text>
        <View
          style={{
            height: 80,
            backgroundColor: "white",
            borderRadius: 8,
            paddingLeft: 10,
            paddingEnd: 10,
            color: "black",
            borderWidth: 0.5,
            borderColor: COLORS.border,
          }}
        >
          <TextInput
            value={notes}
            onChangeText={setNotes}
            style={{ paddingTop: 5 }}
            cursorColor={COLORS.primary}
          ></TextInput>
        </View>

        {showList && (
          <ListCustomer setCustomer={setCustomer} setShowList={setShowList} />
        )}
      </View>
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
              setTimNew
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const ListCustomer = (props) => {
  const { setCustomer, setShowList } = props;

  const listCus = useSelector((state) => state.customersReducer.items);
  return (
    <ScrollView
      style={{
        position: "absolute",
        marginTop: 270,
        backgroundColor: COLORS.white,
        right: 0,

        paddingHorizontal: 10,
        left: 0,
        margin: 20,
        elevation: 5,
        borderRadius: 8,
      }}
    >
      {listCus.map((item, index) => {
        return (
          <TouchableOpacity
            style={{ borderBottomWidth: 1, borderColor: COLORS.bg }}
            key={index}
            onPress={() => {
              setCustomer(item), setShowList(false);
            }}
          >
            <Text
              style={{ padding: 10, color: COLORS.primary, fontWeight: "600" }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
