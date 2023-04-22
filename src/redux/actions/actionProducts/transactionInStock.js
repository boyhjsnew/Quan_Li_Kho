import { firebase } from "../../../firebase/firebase";
const db = firebase.firestore();

export default transactionInStock = (dataProducts, dataDocuments) => {
  db.collection("Products")
    .add(dataProducts)
    .then((docProduct) => {
      const productId = docProduct.id;

      //cap nhat document
      const documents = {
        ...dataDocuments,
        productId: productId,
      };
      return db.collection("Documents").add(documents);
    })
    .then(() => {
      console.log("Added ducment");
    })
    .catch((err) => {
      console.log(err);
    });
};
