import { firebase } from "../../../firebase/firebase";

const data = firebase.firestore().collection("Customers");
export const fetchCustomers = (dispatch) => {
  data.onSnapshot((snapshot) => {
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
        discount: doc.data().discount,
        notes: doc.data().notes,
      });
    });
    dispatch({ type: "GET_CUSTOMERS", payload: items });
  });
};
