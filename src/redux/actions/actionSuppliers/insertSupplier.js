import { firebase } from "../../../firebase/firebase";

const data = firebase.firestore().collection("Suppliers");
const insertSupplier = (
  address,
  bankdetail,
  email,
  name,
  notes,
  phone,
  taxID
) => {
  data
    .add({
      address,
      bankdetail,
      email,
      name,
      notes,
      phone,
      taxID,
    })
    .then(() => {
      console.log("INSERTED SUPPERLISER");
    });
};

export default insertSupplier;
