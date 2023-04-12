import { firebase } from "../../firebase/firebase";

const data = firebase.firestore().collection("Store");
const insertStore = (name) => {
  data
    .add({
      name,
      icPicked: false,
    })
    .then(() => {
      console.log("INSERTED STORE");
    });
};

export default insertStore;
