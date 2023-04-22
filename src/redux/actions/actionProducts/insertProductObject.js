import { firebase } from "../../../firebase/firebase";

const data = firebase.firestore().collection("Products");
const insertProductsObject = (items) => {
  data
    .add({
      ...items,
    })
    .then(() => {
      console.log("INSERTED PRODUCTS");
    });
};

export default insertProductsObject;
