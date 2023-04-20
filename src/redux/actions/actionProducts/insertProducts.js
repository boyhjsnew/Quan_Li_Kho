import { firebase } from "../../../firebase/firebase";

const data = firebase.firestore().collection("Products");
const insertProducts = (
  name,
  barcode,
  description,
  image,
  pricePurcharse,
  priceSale
) => {
  data
    .add({
      name,
      barcode,
      description,
      image,
      pricePurcharse,
      priceSale,
    })
    .then(() => {
      console.log("INSERTED PRODUCTS");
    });
};

export default insertProducts;
