import React, { useEffect } from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import color from "../Home/../../assets/colors/COLORS";
import ContentHeader from "../../components/ContentHeader";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Dashboard from "../../components/Dashboard";
import Reports_Expenses from "../../components/Reports_Expenses";
import Toolbar from "../../components/Toolbar";
import { useDispatch } from "react-redux";
import { fetchWarehouse } from "../../redux/actions/getStore";

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const iconOneClick = () => alert("iconOneClick");
  useEffect(() => {
    fetchWarehouse(dispatch);
  }, []);
  return (
    <View>
      <View>
        <Toolbar
          title="Quản Lý Kho"
          iconOne="menu"
          iconOneClick={iconOneClick}
          iconTwo="file-text"
          iconThree="info-circle"
        />
        <ContentHeader navigation={navigation} />
      </View>
      <View style={{ paddingHorizontal: 14 }}>
        <Dashboard navigation={navigation} />
      </View>

      <View style={{ paddingHorizontal: 14 }}>
        <Reports_Expenses navigation={navigation} />
      </View>
    </View>
  );
}
