import { Text, View, TouchableOpacity, TextInput, Modal,FlatList,ScrollView } from "react-native";
import React, { useState } from "react";
import Toolbar from "../../../../../components/Toolbar";
import COLORS from "../../../../../assets/colors/COLORS";
import ModalCalendar from "../../../../../components/Calendar";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ScreenReceiveGoods({ navigation }) {
  const route = useRoute()
  const {navigation2} = route.params
  

  return (
    <View>
      <Toolbar
        iconOne="arrow-back-circle"
        title="Nhập Hàng"
        iconThree="check"
        itemThreeClick={() => navigation.goBack()}
        clickGoBack={() => navigation.goBack()}
      />
      <ContentReceiveGoods navigation2={navigation2}  />
    </View>
  );
}
const ContentReceiveGoods = (props) => {
  const [showCalendar, setShowCalendar] = useState(false);
 const {navigation2} = props
 const navigationSub = useNavigation()
 const [showList,setShowList] = useState(false)
 const[supplier,setSuppliers] = useState('')
  // CALENDER
  const [timeStamp, setTimeStamp] = useState(new Date().getDay());
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <View>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            color: "#90929E",
            fontSize: 16,
            fontWeight: "700",
            marginVertical: 6,
            paddingTop: 10,
          }}
        >
          Số Lượng
        </Text>
        <TextInput
          cursorColor={COLORS.primary}
          style={{
            height: 40,
            backgroundColor: "white",
            borderRadius: 8,
            paddingLeft: 10,
            paddingEnd: 10,
            color: "black",
            borderWidth: 0.5,
            borderColor: COLORS.border,
          }}
        ></TextInput>
        <Text
          style={{
            color: "#90929E",
            fontSize: 16,
            fontWeight: "700",
            marginVertical: 6,
            paddingTop: 10,
          }}
        >
          Ngày nhập
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => {
              setShowCalendar(true);
            }}
            cursorColor={COLORS.primary}
            style={{
              justifyContent: "center",
              width: "100%",
              height: 40,
              backgroundColor: "white",
              borderRadius: 8,
              paddingLeft: 10,
              paddingEnd: 10,
              color: "black",
              borderWidth: 0.5,
              borderColor: COLORS.border,
            }}
          >
            <Text style={{ fontSize: 17 }}>
              {day}/{month}/{year}
            </Text>
          </TouchableOpacity>
          {/* CLICK QR_CODE */}
        </View>
        <Text
          style={{
            color: "#90929E",
            fontSize: 16,
            fontWeight: "700",
            marginVertical: 6,
            paddingTop: 10,
          }}
        >
          Nhà cung cấp
        </Text>
        <TouchableOpacity onPress={()=>setShowList(!showList)}
          cursorColor={COLORS.primary}
          style={{
            height: 40,
            backgroundColor: "white",
            borderRadius: 8,
            paddingLeft: 10,
            paddingEnd: 10,
            color: "black",
            borderWidth: 0.5,
            justifyContent:"center",
            borderColor: COLORS.border,
          }}
        ><Text style={{fontSize:16}}>{supplier}</Text></TouchableOpacity>
        <Text
          style={{
            color: "#90929E",
            fontSize: 16,
            fontWeight: "700",
            marginVertical: 6,
            paddingTop: 10,
          }}
        >
          Bình luận
        </Text>
        <TextInput
          cursorColor={COLORS.primary}
          style={{
            height: 80,
            backgroundColor: "white",
            borderRadius: 8,
            paddingLeft: 10,
            paddingEnd: 10,
            color: "black",
            borderWidth: 0.5,
            borderColor: COLORS.border,
          }}
        ></TextInput>
       {showList&&<ListSuppliers setSuppliers={setSuppliers} setShowList={setShowList}/>}
      </View>
      <Modal visible={showCalendar} transparent={true}>
        <View style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", flex: 1 }}>
          <View
            style={{
              position: "absolute",
              width: "80%",
              alignSelf: "center",
              top: 130,
            }}
          >
            <ModalCalendar
              handleClose={() => {
                setShowCalendar(false);
              }}
              setShowCalendar={setShowCalendar}
              setDayNew={setDay}
              setMonthNew={setMonth}
              setYearNew={setYear}
              setTimNew
            />
          </View>

        </View>
      </Modal>
     
      
    </View>
    

  );
};
const ListSuppliers = (props) => {
  const {setSuppliers,setShowList} = props
 
  const listSup= [
    {
      id:1,name:'Nguyen van A'
    }
    ,{
      id:1,name:'Nguyen van b'
    },
    ,{
      id:1,name:'Nguyen van c'
    }
  ]
  return (
    <ScrollView style={{position:'absolute',marginTop:270,backgroundColor:COLORS.white,right:0,left:0,margin:20,elevation:5,height:150}}>
       {listSup.map((item,index)=>{
      return<TouchableOpacity key={index} onPress={()=>{ setSuppliers(item.name),setShowList(false)}} >
    

      <Text style={{padding:10}}>{item.name}</Text>
    
   </TouchableOpacity>
    })}
   
    </ScrollView>
   
  )
  
}
