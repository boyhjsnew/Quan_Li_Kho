import { firebase } from "../../firebase/firebase";
const data = firebase.firestore().collection("Store");

const deleteStore = () => {
  data
    .doc("BLr0P325XrgrwDV6LNFL")
    .delete()
    .then(() => {
      console.log("da xoa ");
    });
};
export default deleteStore;
