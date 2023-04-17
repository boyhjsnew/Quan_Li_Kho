import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";

import COLORS from "../assets/colors/COLORS";
export default function ModalCalendar(props) {
  const [timeStamp, setTimeStamp] = useState(new Date().getDay());
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  //   const[showCalendar,setShowCalendar] = useState(false)
  const { setDayNew, setMonthNew, setYearNew } = props;

  const { handleClose } = props;
  const { setShowCalendar } = props;
  //   alert(showCalendar)

  return (
    <View>
      <View
        style={{
          width: "100%",
          height: 90,
          backgroundColor: COLORS.primary,
          paddingLeft: 30,
          justifyContent: "center",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <Text style={{ color: "#ffffff", fontWeight: "700", fontSize: 17 }}>
          {year}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "white", fontWeight: "700", fontSize: 30 }}>
            Th {timeStamp},{" "}
          </Text>
          <Text style={{ color: "white", fontWeight: "700", fontSize: 30 }}>
            {day}
          </Text>
          <Text style={{ color: "white", fontWeight: "700", fontSize: 30 }}>
            {" "}
            thg {month}
          </Text>
        </View>
      </View>
      <Calendar
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: COLORS.secondary,
          selectedDayTextColor: "#ffffff",
          todayTextColor: COLORS.primary,
          arrowColor: COLORS.primary,
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
          },
        }}
        hideExtraDays={true}
        hideDayNames={true}
        pointerEvents="true"
        onDayPress={(day) => {
          setDay(day.day), setMonth(day.month);
          setYear(day.year);
          setSelectedDate(day.dateString);
          // setTimeStamp(new Date(day.timestamp).getDay()),
          if (new Date(day.timestamp).getDay() == 0) return setTimeStamp("CN");
          if (new Date(day.timestamp).getDay() == 1) return setTimeStamp("2");
          if (new Date(day.timestamp).getDay() == 2) return setTimeStamp("3");
          if (new Date(day.timestamp).getDay() == 3) return setTimeStamp("4");
          if (new Date(day.timestamp).getDay() == 4) return setTimeStamp("5");
          if (new Date(day.timestamp).getDay() == 5) return setTimeStamp("6");
          if (new Date(day.timestamp).getDay() == 6) return setTimeStamp("7");
        }}
      />
      <View
        style={{
          backgroundColor: "white",
          height: 70,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity onPress={() => setShowCalendar(false)}>
            <Text
              style={{ fontSize: 15, paddingHorizontal: 10, fontWeight: "600" }}
            >
              Hủy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDayNew(day),
                setMonthNew(month),
                setYearNew(year),
                setShowCalendar(false);
            }}
          >
            <Text
              style={{ fontSize: 15, paddingHorizontal: 10, fontWeight: "600" }}
            >
              Xong
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "yellow",
  },
});
