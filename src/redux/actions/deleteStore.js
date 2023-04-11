import { firebase } from "../../firebase/firebase";
const data = firebase.firestore().collection("Store");

const deleteStore = () => {
  data
    .doc({
      id: "BLr0P325XrgrwDV6LNFL",
    })
    .delete()
    .then(() => {
      console.log("da xoa ");
    })
    .catch((err) => console.log(err));
};
export default deleteStore;
