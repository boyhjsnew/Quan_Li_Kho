import {StyleSheet,TouchableWithoutFeedback,Animated, Image} from 'react-native';
import {AntDesign,Entypo} from '@expo/vector-icons'
import { View, Text } from 'react-native'
import React from 'react'
import COLORS from '../assets/colors/COLORS';
import { FloatingAction } from "react-native-floating-action";

const actions = [
    {
      text: "Accessibility",
      icon: require("../assets/images/addimage.png"),
      name: "bt_accessibility",
      position: 2
    },
    {
      text: "Language",
      icon: require("../assets/images/addimage.png"),
      name: "bt_language",
      position: 1
    },
    {
      text: "Location",
      icon: require("../assets/images/addimage.png"),
      name: "bt_room",
      position: 3
    },
    {
      text: "Video",
      icon: require("../assets/images/addimage.png"),
      name: "bt_videocam",
      position: 4
    }
  ];
export default function FloatingButton() {
  return (
    <View style={{position:"absolute",backgroundColor:"black",right:0,top:700}}>
  <FloatingAction
    actions={actions}
    onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
  />
</View>

)}
