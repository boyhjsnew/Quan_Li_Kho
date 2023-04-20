import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenGood from './ScreenGood';
import ScreenAddGoods from './ScreenAddGoods';
import ScreenEditGoods from './ScreenEditGoods';
import ScreenIssueGoods from './SubScreenGoods/ScreenIssueGoods';
import ScreenReceiveGoods from './SubScreenGoods/ScreenReceiveGoods';
import ScreenSuppliers from '../ScreenSuppliers/ScreenSuppliers';
import NavSuppliers from '../ScreenSuppliers/NavSuppliers';
import ScreenCustomers from '../ScreenCustomers/ScreenCustomers';

export default function NavGood({navigation}) {
   const route = useRoute()
   const {fullIcon} = route.params
  
  
   
    const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Goods">
              {()=><ScreenGood navigation={navigation} fullIcon={fullIcon}/>}
            </Stack.Screen>
            <Stack.Screen name='AddGoods' component={ScreenAddGoods}></Stack.Screen>
            <Stack.Screen name='EditGoods' component={ScreenEditGoods}></Stack.Screen>
            <Stack.Screen name='Receive' component={ScreenReceiveGoods}/>
            <Stack.Screen name='Supplier' component={ScreenSuppliers}/>
            <Stack.Screen name='Customer' component={ScreenCustomers}/>
            <Stack.Screen name='Issue' component={ScreenIssueGoods}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}