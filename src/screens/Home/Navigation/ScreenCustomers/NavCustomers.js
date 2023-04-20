import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";

import { View, Text } from 'react-native'
import React from 'react'
import ScreenAddCustomer from "./ScreenAddCustomer";
import ScreenCustomers from "./ScreenCustomers";


export default function NavCustomers({navigation}) {
   
    const Stack = createNativeStackNavigator()
    const route = useRoute()
    const {from} = route.params

  return (
   <NavigationContainer independent={true} >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Customers'>
            {()=><ScreenCustomers navigation={navigation} from={from} />}
        </Stack.Screen>
        <Stack.Screen name='AddCustomers' component={ScreenAddCustomer}></Stack.Screen>
      </Stack.Navigator>
   </NavigationContainer>
  )
}

