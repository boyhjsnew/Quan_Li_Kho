import { firebase } from "../../firebase/firebase";
const data = firebase.firestore().collection("Store");

const deleteStore = (id) => {
  data
    .doc(id)
    .delete()
    .then(() => {
      console.log("da xoa ");
    });
};
export default deleteStore;
