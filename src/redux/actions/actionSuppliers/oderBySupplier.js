import { firebase } from "../../../firebase/firebase";

export const oderBySuppliers = (dispatch, oderBy) => {
  firebase
    .firestore()
    .collection("Suppliers")
    .orderBy("name", oderBy)
    .onSnapshot((snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          name: doc.data().name,
          address: doc.data().address,
          email: doc.data().email,
          phone: doc.data().phone,
          bankdetail: doc.data().bankdetail,
          taxID: doc.data().taxID,
          notes: doc.data().notes,
        });
      });
      dispatch({ type: "GET_SUPPLIERS", payload: items });
    });
};
