import { firebase } from "../../firebase/firebase";
const data = firebase.firestore().collection("Store");
export const fetchWarehouse = (dispatch) => {
  data.onSnapshot((snapshot) => {
    const items = [];
    snapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        name: doc.data().name,
        isPicked: doc.data().isPicked,
      });
    });
    dispatch({ type: "GET_WAREHOUSE", payload: items });
  });
};
