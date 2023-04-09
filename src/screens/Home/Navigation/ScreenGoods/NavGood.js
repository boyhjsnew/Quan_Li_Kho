import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenGood from './ScreenGood';
import ScreenAddGoods from './ScreenAddGoods';
import ScreenEditGoods from './ScreenEditGoods';
import ScreenIssueGoods from './SubScreenGoods/ScreenIssueGoods';
import ScreenReceiveGoods from './SubScreenGoods/ScreenReceiveGoods';

export default function NavGood({navigation}) {
    const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Goods">
              {()=><ScreenGood navigation={navigation}/>}
            </Stack.Screen>
            <Stack.Screen name='AddGoods' component={ScreenAddGoods}></Stack.Screen>
            <Stack.Screen name='EditGoods' component={ScreenEditGoods}></Stack.Screen>
            <Stack.Screen name='Receive' component={ScreenReceiveGoods}/>
            <Stack.Screen name='Issue' component={ScreenIssueGoods}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}