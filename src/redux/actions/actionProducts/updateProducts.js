import { firebase } from "../../../firebase/firebase";
const data = firebase.firestore().collection("Products");

const updateProducts = (
  id,
  name,
  barcode,
  description,
  pricePurcharse,
  priceSale
) => {
  data
    .doc(id)
    .update({
      name,
      barcode,
      description,
      pricePurcharse,
      priceSale,
    })
    .then(() => {
      console.log("Updated");
    })
    .catch((err) => console.log(err));
};
export default updateProducts;
