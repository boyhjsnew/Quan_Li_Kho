import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ScreenCustomers() {
    const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{width:60,height:20,borderWidth:1,marginTop:20}}><Text>back home</Text></TouchableOpacity>
      <Text style={{marginTop:100,alignSelf:'center'}}>ScreenCustomers</Text>
    </View>
  )
};
