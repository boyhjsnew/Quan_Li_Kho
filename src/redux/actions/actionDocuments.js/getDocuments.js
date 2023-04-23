import { firebase } from "../../../firebase/firebase";

const data = firebase.firestore().collection("Documents").orderBy("id");
export const fetchDocuments = (dispatch) => {
  data.onSnapshot((snapshot) => {
    const items = [];
    snapshot.forEach((doc) => {
      items.push({
        QuaInStock: doc.data().QuaInStock,
        QuaOutStock: doc.data().QuaOutStock,
        createAt: doc.data().createAt,
        idDoc: doc.id,
        id: doc.data().id,
        idCustomer: doc.data().idCustomer,
        idStore: doc.data().idStore,
        notes: doc.data().notes,
        productId: doc.data().productId,
        idSupplier: doc.data().idSupplier,
        typeDocument: doc.data().typeDocument,
        paid: doc.data().paid,
      });
    });
    dispatch({ type: "GET_DOCUMENTS", payload: items });
  });
};
