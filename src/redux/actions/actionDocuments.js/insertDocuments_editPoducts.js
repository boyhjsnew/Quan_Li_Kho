import { firebase } from "../../../firebase/firebase";
const db = firebase.firestore();

export default insertDocument_editProduct = (
  idProduct,
  dataProducts,
  dataDocuments,
  dispatch
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
      dispatch({
        type: "INSERT_DOCUMENTS",
        payload: dataDocuments,
      });
    })
    .catch((error) => {
      console.error("Error updating product and adding document: ", error);
    });
};
