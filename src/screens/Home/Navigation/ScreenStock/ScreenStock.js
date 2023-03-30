import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import COLORS from "../../../../assets/colors/COLORS";
import Toolbar from "../../../../components/Toolbar";
import ListStock from "./ListStock";

export default function ScreenStock() {
  return (
    <View>
      <Toolbar />
      <ListStock />
    </View>
  );
}
