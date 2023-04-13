import { firebase } from "../../../firebase/firebase";

const data = firebase.firestore().collection("Customers");
const insertCustomer = (
  address,
  bankdetail,
  email,
  name,
  notes,
  phone,
  discount,
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
      discount,
      taxID,
    })
    .then(() => {
      console.log("INSERTED CUSTOMERS");
    });
};

export default insertCustomer;
