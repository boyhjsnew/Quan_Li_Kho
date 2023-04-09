import { View, Text ,TextInput} from 'react-native'
import React from 'react'
import Toolbar from '../../../../../components/Toolbar'
import COLORS from '../../../../../assets/colors/COLORS'

export default function ScreenIssueGoods({navigation}) {
  return (
    <View>
     <Toolbar  iconOne="arrow-back-circle"
        title="Giảm mặt hàng"
        iconThree="check"
        itemThreeClick={()=>navigation.goBack()}
        clickGoBack={() => navigation.goBack()}/>
        <ContentIssueGoods/>
    </View>
  )
}
const ContentIssueGoods = () => {
  return (
    <View style={{padding:10}}>
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
        Thời gian
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextInput
         
          cursorColor={COLORS.primary}
          style={{
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
        ></TextInput>
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
    </View>
  );
};