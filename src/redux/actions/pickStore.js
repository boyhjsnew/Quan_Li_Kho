import { firebase } from "../../firebase/firebase";
const data = firebase.firestore().collection("Store");

const updateStore = (id) => {
  data.get().then((snapshots) => {
    snapshots.forEach((doc) => {
      if (doc.id == id) {
        data.doc(doc.id).update({ isPicked: true });
      } else {
        data.doc(doc.id).update({ isPicked: false });
      }
    });
  });
};
export default updateStore;
