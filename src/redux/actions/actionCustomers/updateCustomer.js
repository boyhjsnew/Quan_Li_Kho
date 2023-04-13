import { firebase } from "../../../firebase/firebase";
const data = firebase.firestore().collection("Customers");

const updateCustomer = (
  id,
  address,
  bankdetail,
  email,
  name,
  notes,
  phone,
  taxID,
  discount
) => {
  data
    .doc(id)
    .update({
      address,
      bankdetail,
      email,
      name,
      notes,
      phone,
      taxID,
      discount,
    })
    .then(() => {
      console.log("Updated");
    })
    .catch((err) => console.log(err));
};
export default updateCustomer;
