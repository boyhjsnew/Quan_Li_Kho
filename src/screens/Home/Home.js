import React from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import color from "../Home/../../assets/colors/COLORS";

import ContentHeader from "../../components/ContentHeader";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Dashboard from "../../components/Dashboard";
import Reports_Expenses from "../../components/Reports_Expenses";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <View>
      <SafeAreaView style={{ backgroundColor: color.primary, padding: 10 }}>
        <Header />
        <ContentHeader navigation={navigation} />
      </SafeAreaView>
    </View>
    <View style={{paddingHorizontal:14}}>
    <Dashboard navigation={navigation}/>
    </View>
   
    <View style={{paddingHorizontal:14}}>
    <Reports_Expenses navigation={navigation}/>
    </View>
    
    </View>
    
    
  );
}
