import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Toolbar from "../../../../../components/Toolbar";
import COLORS from "../../../../../assets/colors/COLORS";
import ModalCalendar from "../../../../../components/Calendar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import insertProductsObject from "../../../../../redux/actions/actionProducts/insertProductObject";
import transactionInStock from "../../../../../redux/actions/actionProducts/transactionInStock";
import formatIDDocuments from "../../../../../utils/formatId";
import insertDocuments_editPoducts from "../../../../../redux/actions/actionDocuments.js/insertDocuments_editPoducts";

export default function ScreenReceiveGoods({ navigation }) {
  const route = useRoute();
  const idProduct = route.params && route.params.idProduct;
  const [showCalendar, setShowCalendar] = useState(false);
  const navigationSub = useNavigation();
  const [showList, setShowList] = useState(false);
  const [supplier, setSuppliers] = useState([]);
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
  const instockItems = listDocument.filter(
    (item) => item.typeDocument == "instock"
  );

  // idStore
  const idStorePick = listStore.map((item) => {
    var id = "";
    if (item.isPicked == true) {
      id = item.id;
    }
    return id;
  });

  const [IDINSTOCK, setIDINSTOCK] = useState(
    instockItems.length > 0
      ? Number(instockItems[instockItems.length - 1].id)
      : 0
  );

  // CALENDER
  useEffect(() => {
    if (typeof idProduct == "undefined") {
      const dataDocuments = {
        QuaInStock: Number(quantity),
        createAt: `${day}/${month}/${year}`,
        idCustomer: "null",
        idStore: idStorePick.join(""),
        idSupplier: supplier.id,
        notes: notes,
        id: formatIDDocuments(IDINSTOCK + 1),
        typeDocument: typeDocument,
        paid: 1,
      };
      // console.log(dataDocuments);
      setDocument({ ...document, item: dataDocuments });
    } else {
      const dataDocumentWithID = {
        QuaInStock: Number(quantity),
        createAt: `${day}/${month}/${year}`,
        idCustomer: "null",
        idStore: idStorePick.join(""),
        idSupplier: supplier.id,
        notes: notes,
        productId: idProduct,
        id: formatIDDocuments(IDINSTOCK + 1),
        typeDocument: typeDocument,
        paid: 1,
      };
      // console.log(dataDocumentWithID);
      setDocument({ ...document, item: dataDocumentWithID });
    }
  }, [quantity, day, month, year, supplier, notes]);

  return (
    <View>
      <Toolbar
        iconOne="arrow-back-circle"
        title="Nhập Hàng"
        iconThree="check"
        itemThreeClick={() => {
          if (typeof idProduct == "undefined") {
            transactionInStock(itemProduct, document.item);
            navigation.goBack();
          } else {
            insertDocuments_editPoducts(idProduct, itemProduct, document.item);
            navigation.goBack();
          }
        }}
        clickGoBack={() => navigation.goBack()}
      />
      <ContentReceiveGoods
        showCalendar={showCalendar}
        showList={showList}
        supplier={supplier}
        quantity={quantity}
        notes={notes}
        day={day}
        month={month}
        year={year}
        setShowCalendar={setShowCalendar}
        setShowList={setShowList}
        setSuppliers={setSuppliers}
        setQuantity={setQuantity}
        setNotes={setNotes}
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
      />
    </View>
  );
}
const ContentReceiveGoods = (props) => {
  const {
    showList,
    supplier,
    quantity,
    notes,
    day,
    month,
    year,
    showCalendar,
    setShowCalendar,
    setShowList,
    setSuppliers,
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
          keyboardType="numeric"
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
          Ngày nhập
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
          Nhà cung cấp
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
            alignItems: "center",
            borderWidth: 0.5,
            borderColor: COLORS.border,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16 }}>{supplier.name}</Text>
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
            style={{ paddingTop: 5 }}
            value={notes}
            onChangeText={setNotes}
            cursorColor={COLORS.primary}
          ></TextInput>
        </View>

        {showList && (
          <ListSuppliers
            supplier={supplier}
            setSuppliers={setSuppliers}
            setShowList={setShowList}
          />
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
const ListSuppliers = (props) => {
  const { setSuppliers, setShowList, supplier } = props;
  const listSup = useSelector((state) => state.supplierReducer.items);

  return (
    <ScrollView
      endFillColor={COLORS.primary}
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
      {listSup.map((item, index) => {
        return (
          <TouchableOpacity
            style={{ borderBottomWidth: 1, borderColor: COLORS.bg }}
            key={index}
            onPress={() => {
              const newSup = { id: item.id, name: item.name };
              setSuppliers(newSup), setShowList(false);
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
