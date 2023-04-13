import { Linking } from "react-native";

const sendEmail = (email, name) => {
  Linking.openURL(
    `mailto:${email}.com?subject=Xin chào quý ${name}&body=`
  ).catch((err) => console.log(err));
};

export default sendEmail;
