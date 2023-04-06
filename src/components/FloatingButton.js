import {StyleSheet,TouchableWithoutFeedback,Animated, Image} from 'react-native';
import {AntDesign,Entypo} from '@expo/vector-icons'
import { View, Text } from 'react-native'
import React from 'react'
import COLORS from '../assets/colors/COLORS';
import { FloatingAction } from "react-native-floating-action";


export default function FloatingButton(props) {
    const{navigation} = props
    const actions = [
        {
          color:'white',
          tintColor:'#3377fe',
          text: 'Nhập hàng',
          icon: require("../assets/images/incoming.png"),
          name: "Incoming",
          position: 1,
        },
        {
          color:'white',
          tintColor:'#f9c25b',
          text: "Xuất hàng",
          icon: require("../assets/images/outgoing.png"),
          name: "OutGoing",
          position: 2
        },
        {
          color:'white',
          text: "Stock-taking",
          tintColor:'#02b2ed',
          icon: require("../assets/images/box.png"),
          name: "Stock-taking",
          position: 3
        },
        {
          color:'white',
          tintColor:'#cb5a5f',
          text: "Transfer",
          icon: require("../assets/images/exchange.png"),
          position: 5,
          name:'Transfer'
        }
      ];
  return (
  <FloatingAction
    
    position='right'
    actions={actions}
    color={COLORS.primary}
    
    onPressItem={name => {
      if(name==='Incoming') return navigation.push(name);
      if(name==='OutGoing') return navigation.push(name);
      if(name==='Stock-taking') return(alert('LÀM THÊM screen Stock..'))
      if(name==='Transfer') return(alert('LÀM Thêm màn hình Tranfer'))
      
    }}
  />)}
