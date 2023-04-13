import call from "react-native-phone-call";
import { Linking } from "react-native";
import { Platform } from "react-native";

const handlePhoneCall = (number) => {
  let phoneNumber = "";
  if (Platform.OS === "android") {
    phoneNumber = `tel:${number}`;
  } else {
    phoneNumber = `telprompt:${number}`;
  }
  Linking.openURL(phoneNumber);
};

export default handlePhoneCall;
