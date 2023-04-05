import { View, Text ,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import Toolbar from '../../../../components/Toolbar'
import { useNavigation } from '@react-navigation/native'
import COLORS from '../../../../assets/colors/COLORS'
import Ionicons from "@expo/vector-icons/Ionicons";
export default function ScreenAddSuppliers() {
    const navigation = useNavigation()
  return (
    <View>
    <View>
      <Toolbar iconOne="arrow-back-circle"
        title="Thêm Nhà Cung Cấp"
        iconThree="check"
        clickGoBack={() => navigation.goBack()}
        itemThreeClick={()=>navigation.goBack()}/>
    </View>
    <View style={{padding:10}}>
    <ContentAddSupplier/>
    </View>
    </View>
  )
}
const ContentAddSupplier = () => {
    return (
      <View>
        <Text
          style={{
            color: "#90929E",
            fontSize: 16,
            fontWeight: "700",
            marginVertical: 6,
            paddingTop: 10,
          }}
        >
          Tên nhà cung cấp
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
          
            cursorColor={COLORS.primary}
            style={{
              width: "80%",
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
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: "15%",
              height: 40,
              backgroundColor: "white",
              borderRadius: 8,
              borderColor: "black",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 0.5,
              borderColor: COLORS.border,
            }}
          >
            <Ionicons name='people' size={30} color={"#90929E"}></Ionicons>
          </TouchableOpacity>
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
          Email
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
           
            cursorColor={COLORS.primary}
            style={{
              width: "80%",
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
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: "15%",
              height: 40,
              backgroundColor: "white",
              borderRadius: 8,
              borderColor: "black",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 0.5,
              borderColor: COLORS.border,
            }}
          >
            <Ionicons name='mail' size={30} color={"#90929E"}></Ionicons>
          </TouchableOpacity>
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
          Số điện thoại
        </Text>
        <TextInput
          cursorColor={COLORS.primary}
          inputMode='numeric'
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
          Địa chỉ
        </Text>
        <TextInput
          cursorColor={COLORS.primary}
        
          style={{
            height: 65,
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
          thông tin chi tiết ngân hàng
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
          Mã số thuế
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
          Ghi chú
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