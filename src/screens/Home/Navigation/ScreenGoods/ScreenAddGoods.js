import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from 'react-native-elements/dist/header/Header'
import Toolbar from '../../../../components/Toolbar'
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from '../../../../assets/colors/COLORS'
import { TextInput } from 'react-native-gesture-handler'
import iconAdd  from './../../../../assets/images/green-add-button-12023.png'
import iconSubtract from '../../../../assets/images/sign.png'
import icontransfer from '../../../../assets/images/exchange.png'

export default function ScreenAddGoods({navigation}) {
  return (
    <View>
       <Toolbar iconOne="arrow-back-circle" title='Add item' iconThree="check"  clickGoBack = {()=>navigation.goBack()}/>
       <HeaderGoods/>
       <ContentAddGoods/>
       <ButtonContentGoods/>
    </View>
  )
}
const HeaderGoods = () => (
  <View style={styles.header}>
    <Image
      style={{ width: 20, height: 20, opacity: 0.7 }}
      source={require("../../../../assets/images/store.png")}
    ></Image>
    <Text
      style={{
        paddingLeft: 15,
        color: "white",
        opacity: 0.7,
      }}>
      Kho Bình Thạnh
    </Text>
  </View>
);
const styles = StyleSheet.create({
  header: {
    paddingBottom: 10,
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
  }
})

const ContentAddGoods = () =>{
  return <View style={{padding:10}}>
    <Text style={{opacity:0.5,fontSize:16,fontWeight:'700',marginVertical:6,paddingTop:10}}>Name</Text>
    <TextInput style={{width:'100%',height:45,borderWidth:1,backgroundColor:"white",borderRadius:5,paddingLeft:10,paddingEnd:10,color:'black'}}></TextInput>
    <Text  style={{opacity:0.5,fontSize:16,fontWeight:'700',marginVertical:6,paddingTop:10}}>Barcode</Text>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
    <TextInput style={{width:'80%',height:45,borderWidth:1,backgroundColor:"white",borderRadius:5,paddingLeft:10,paddingEnd:10,color:'black'}}></TextInput>
    {/* CLICK QR_CODE */}
    <TouchableOpacity onPress={()=>{}} style={{width:'15%',height:45,backgroundColor:"white",borderRadius:5,borderColor:"black",borderWidth:1,alignItems:"center",justifyContent:"center"}} >
      <Ionicons name='qr-code-outline' size={30} ></Ionicons>
    </TouchableOpacity>
    </View>
    <Text style={{opacity:0.5,fontSize:16,fontWeight:'700',marginVertical:6,paddingTop:10}}>Description</Text>
    <TextInput style={{width:'100%',height:45,borderWidth:1,backgroundColor:"white",borderRadius:5,paddingLeft:10,paddingEnd:10,color:'black'}}></TextInput>
    
  </View>
}
const ButtonContentGoods=(props)=>{
  const infoBtn = [
    {
    iconBtn:require('./../../../../assets/images/green-add-button-12023.png'),
    nameBtn:'Receive Goods',
    clickBtn:()=>{
      alert('add')
    }
  },
  {
    iconBtn:require('../../../../assets/images/sign.png'),
    nameBtn:'Receive Goods',
    clickBtn:()=>{
      alert('xoa')
    }
  },
  {
    iconBtn:require('../../../../assets/images/exchange.png'),
    nameBtn:'Receive Goods',
    clickBtn:()=>{
      alert('transfer')
    }
  },

]
  return(
    <View style={{flexDirection:"row",marginLeft:10}}>
      {infoBtn.map((info,index)=>{
        return<TouchableOpacity onPress={info.clickBtn} key={index} style={{width:118,height:118,marginHorizontal:index===1?10:0,borderRadius:10,justifyContent:"center",alignItems:'center',borderWidth:1,backgroundColor:'white'}}>
        <Image style={{width:40,height:40}} source={info.iconBtn}/>
        <Text style={{paddingTop:15}}>{info.nameBtn}</Text>
    </TouchableOpacity>
      })}
    </View>
  )
}