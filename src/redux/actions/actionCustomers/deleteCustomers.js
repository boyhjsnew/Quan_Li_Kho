import { firebase } from "../../../firebase/firebase";
const data = firebase.firestore().collection("Customers");

const deleteCustomer = (id) => {
  data
    .doc(id)
    .delete()
    .then(() => {
      console.log("da xoa ");
    });
};
export default deleteCustomer;
