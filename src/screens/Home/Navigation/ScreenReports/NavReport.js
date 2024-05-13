import { View, Text } from "react-native";
import React from "react";
import ScreenReports from "./ScreenReports";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TableReport from "./TableReport";

export default function NavReport() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="report">
          {() => <ScreenReports navigation={navigation} />}
        </Stack.Screen>
        <Stack.Screen name="table" component={TableReport} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
