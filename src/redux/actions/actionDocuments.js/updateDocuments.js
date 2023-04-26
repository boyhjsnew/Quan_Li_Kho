import { firebase } from "../../../firebase/firebase";
const data = firebase.firestore().collection("Documents");

const updateDocuments = (id, paid, notes) => {
  data
    .doc(id)
    .update({
      paid,
      notes,
    })
    .then(() => {
      console.log("Updated DOCUMENR");
    })
    .catch((err) => console.log(err));
};
export default updateDocuments;
