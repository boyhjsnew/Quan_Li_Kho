import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";

import { View, Text } from "react-native";
import React, { useState } from "react";
import ScreenSuppliers from "./ScreenSuppliers";
import ScreenAddSuppliers from "./ScreenAddSuppliers";

export default function NavSuppliers({ navigation }) {
  const Stack = createNativeStackNavigator();
  const route = useRoute()
  const {from} = route.params
  
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Suppliers">
          {() => <ScreenSuppliers navigation={navigation} from={from} />}
        </Stack.Screen>
        <Stack.Screen name="AddSuppliers">
          {() => <ScreenAddSuppliers />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
