import { firebase } from "../../../firebase/firebase";
const data = firebase.firestore().collection("Products");

const deleteProducts = (id) => {
  data
    .doc(id)
    .delete()
    .then(() => {
      console.log("da xoa ");
    });
};
export default deleteProducts;
