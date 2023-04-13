import { firebase } from "../../../firebase/firebase";

const data = firebase.firestore().collection("Suppliers");
export const fetchSuppliers = (dispatch) => {
  data.onSnapshot((snapshot) => {
    const items = [];
    snapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        name: doc.data().name,
        address: doc.data().address,
        email: doc.data().email,
        phone: doc.data().phone,
        bankdetails: doc.data().bankdetails,
        taxID: doc.data().taxID,
        notes: doc.data().notes,
      });
    });
    dispatch({ type: "GET_SUPPLIERS", payload: items });
  });
};
