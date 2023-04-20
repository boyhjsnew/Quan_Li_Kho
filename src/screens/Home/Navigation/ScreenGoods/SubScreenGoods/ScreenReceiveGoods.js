import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Toolbar from "../../../../../components/Toolbar";
import COLORS from "../../../../../assets/colors/COLORS";
import ModalCalendar from "../../../../../components/Calendar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ScreenReceiveGoods({ navigation }) {
  const route = useRoute();

  return (
    <View>
      <Toolbar
        iconOne="arrow-back-circle"
        title="Nhập Hàng"
        iconThree="check"
        itemThreeClick={() => navigation.goBack()}
        clickGoBack={() => navigation.goBack()}
      />
      <ContentReceiveGoods />
    </View>
  );
}
const ContentReceiveGoods = (props) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const navigationSub = useNavigation();
  const [showList, setShowList] = useState(false);
  const [supplier, setSuppliers] = useState("");
  // CALENDER

  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
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
          <Text style={{ fontSize: 16 }}>{supplier}</Text>
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
        <TextInput
          cursorColor={COLORS.primary}
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
        ></TextInput>
        {showList && (
          <ListSuppliers
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
  const { setSuppliers, setShowList } = props;

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
              setSuppliers(item.name), setShowList(false);
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
