import { firebase } from "../../../firebase/firebase";
const data = firebase.firestore().collection("Suppliers");

const deleteSupplier = (id) => {
  data
    .doc(id)
    .delete()
    .then(() => {
      console.log("da xoa ");
    });
};
export default deleteSupplier;
