import { firebase } from "../../../firebase/firebase";

const data = firebase.firestore().collection("Products");
export const fetchProducts = (dispatch) => {
  data.onSnapshot((snapshot) => {
    const items = [];
    snapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        nameproduct: doc.data().name,
        barcode: doc.data().barcode,
        image: doc.data().image,
        description: doc.data().description,
      });
    });
    dispatch({ type: "GET_PRODUCTS", payload: items });
  });
};
