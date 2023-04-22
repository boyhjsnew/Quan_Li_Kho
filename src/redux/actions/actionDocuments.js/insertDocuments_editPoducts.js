import { useSelector } from "react-redux";
import { firebase } from "../../../firebase/firebase";
const db = firebase.firestore();

export default insertDocument_editProduct = (
  idProduct,
  dataProducts,
  dataDocuments
) => {
  return db
    .collection("Products")
    .doc(idProduct)
    .update(dataProducts)
    .then(() => {
      return db.collection("Documents").add(dataDocuments);
    })
    .then((docRef) => {
      console.log("Document added with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error updating product and adding document: ", error);
    });
};
