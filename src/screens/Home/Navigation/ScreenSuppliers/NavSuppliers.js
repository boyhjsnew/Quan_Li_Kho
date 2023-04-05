import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { View, Text } from 'react-native'
import React from 'react'
import ScreenSuppliers from "./ScreenSuppliers";
import ScreenAddSuppliers from "./ScreenAddSuppliers";

export default function NavSuppliers({navigation}) {
   
    const Stack = createNativeStackNavigator()
  return (
   <NavigationContainer independent={true} >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Suppliers'>
            {()=><ScreenSuppliers navigation={navigation}/>}
            
        </Stack.Screen>
        <Stack.Screen name='AddSuppliers' component={ScreenAddSuppliers}></Stack.Screen>
      </Stack.Navigator>
   </NavigationContainer>
  )
}

