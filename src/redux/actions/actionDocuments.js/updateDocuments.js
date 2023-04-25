import { firebase } from "../../../firebase/firebase";
const data = firebase.firestore().collection("Documents");

const updateDocuments = (id, createAt, idCustomer, discount, paid) => {
  data
    .doc(id)
    .update({
      createAt,
      idCustomer,
      discount,
      paid,
    })
    .then(() => {
      console.log("Updated DOCUMENR");
    })
    .catch((err) => console.log(err));
};
export default updateDocuments;
