import { firebase } from "../../../firebase/firebase";
const data = firebase.firestore().collection("Suppliers");

const updateSupplier = (
  id,
  address,
  bankdetail,
  email,
  name,
  notes,
  phone,
  taxID
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
    })
    .then(() => {
      console.log("Updated");
    });
};
export default updateSupplier;
