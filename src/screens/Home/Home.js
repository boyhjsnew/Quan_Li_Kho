import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
   
    const navigation = useNavigation()
  return (
    <View style={{padding:30}}>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Good')} style={{width:60,height:20,borderWidth:1,margin:10}}><Text>Goods</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Incoming')} style={{width:60,height:20,borderWidth:1,margin:10}}><Text>incoming</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('OutGoing')} style={{width:60,height:20,borderWidth:1,margin:10}}><Text>outgoing</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Suppliers')} style={{width:60,height:20,borderWidth:1,margin:10}}><Text>Suppliers</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Customers')} style={{width:60,height:20,borderWidth:1,margin:10}}><Text>customer</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Document')} style={{width:60,height:20,borderWidth:1,margin:10}}><Text>document</Text></TouchableOpacity>
    </View>
  )
};
