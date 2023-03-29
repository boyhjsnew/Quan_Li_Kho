import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import spacing from '../assets/dimens/SPACING'
import color from '../assets/colors/COLORS'
import imgbox from '../assets/images/box.png'
import img from '../assets/images/arrow.png'
import imgStore from '../assets/images/store.png'


export default ContentHeader=()=>{
    return(
       <View>
        <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:10}}>
      <View style={{width:'81%',height:50,backgroundColor:color.secondary,borderRadius:10,justifyContent:'center',padding:8}}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{fontSize:20,fontWeight:'500',color:color.white}}>Kho hàng Bình Thạnh</Text>
            <TouchableOpacity><Image source={require=img}></Image></TouchableOpacity>
        </View>
      </View>
      <View style={{width:'15%',height:50,backgroundColor:color.secondary,borderRadius:10,padding:5,justifyContent:"center",alignItems:'center'}}>
      <TouchableOpacity><Image style={{width:30,height:30}} source={require=imgStore}></Image></TouchableOpacity>
      </View>
    </View>
    <View style={{width:'100%',height:61,backgroundColor:color.secondary,marginTop:15,borderRadius:10,justifyContent:"center",flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>
      <View style={{paddingRight:11,height:43,backgroundColor:color.primary,borderTopRightRadius:21.5,borderBottomRightRadius:21.5,alignItems:"center",justifyContent:'center'}}>
        <Image style={{width:35,height:35}} source={require=imgbox}></Image>
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
       </View>
    )
}