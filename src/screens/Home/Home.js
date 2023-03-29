import React from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import color from "../Home/../../assets/colors/COLORS";

import ContentHeader from "../../components/ContentHeader";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView style={{ backgroundColor: color.primary, padding: 10 }}>
        <Header />
        <ContentHeader navigation={navigation} />
      </SafeAreaView>
    </View>
  );
}
