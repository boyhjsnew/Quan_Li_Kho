import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../componets/Header';
import color from '../Home/../../assets/colors/COLORS'
import img from '../Home/../../assets/images/arrow.png'
import imgStore from '../Home/../../assets/images/store.png'
import imgbox from '../Home/../../assets/images/box.png'
import spacing from '../../assets/dimens/SPACING';


export default function Home() {
   
    const navigation = useNavigation()
  return (
    <View style={{width:'100%',height:'29%',backgroundColor:color.primary,padding:10}}>
    <Header />
    <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:10}}>
      <View style={{width:'81%',height:50,backgroundColor:color.secondary,borderRadius:10,justifyContent:'center',padding:8}}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{fontSize:17,fontWeight:'bold',color:color.white}}>Kho hang Binh Thanh</Text>
            <TouchableOpacity><Image source={require=img}></Image></TouchableOpacity>
        </View>
      </View>
      <View style={{width:'15%',height:50,backgroundColor:color.secondary,borderRadius:10,padding:5,justifyContent:"center",alignItems:'center'}}>
      <TouchableOpacity><Image style={{width:30,height:30}} source={require=imgStore}></Image></TouchableOpacity>
      </View>
    </View>
    <View style={{width:'100%',height:61,backgroundColor:color.secondary,marginTop:15,borderRadius:10,justifyContent:"center",flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>
      <View style={{width:60,height:43,backgroundColor:color.primary,borderRadius:21.5,marginLeft:-20,alignItems:"center",justifyContent:'center'}}>
        <Image style={{marginLeft:5,width:35,height:35}} source={require=imgbox}></Image>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly',flex:1,alignItems:"center"}}>
      <View style={{}}>
          <Text style={{color:color.white}}>Current stock</Text>
          <Text style={{color:color.white,fontSize:spacing*1.5,fontWeight:600,fontWeight:600,alignSelf:'center',paddingTop:6}}>627.00</Text>
        </View>
        <View style={{height:50,borderColor:color.white,borderWidth:0.182}}></View>
        <View>
          <Text style={{color:color.white}}>Current stock</Text>
          <Text style={{color:color.white,fontSize:spacing*1.5,fontWeight:600,alignSelf:'center',paddingTop:6}}>$0.00</Text>
        </View>
      </View>
      
    </View>
       {/* <View style={{padding:30}}></View>
       
      <Text>Home</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Good')} style={{width:60,height:20,borderWidth:1,margin:10}}><Text>Goods</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Incoming')} style={{width:60,height:20,borderWidth:1,margin:10}}><Text>incoming</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('OutGoing')} style={{width:60,height:20,borderWidth:1,margin:10}}><Text>outgoing</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Suppliers')} style={{width:60,height:20,borderWidth:1,margin:10}}><Text>Suppliers</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Customers')} style={{width:60,height:20,borderWidth:1,margin:10}}><Text>customer</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Document')} style={{width:60,height:20,borderWidth:1,margin:10}}><Text>document</Text></TouchableOpacity>
    </View> */}
    </View>
   
  )
};
