import { firebase } from "../../../firebase/firebase";

const data = firebase.firestore().collection("Documents");

const getTotalQuantity = (idStore, dispatch) => {
  const totalQuantityByProduct = {};

  data.where("idStore", "==", idStore).onSnapshot((querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      const { productId, QuaInStock, QuaOutStock, typeDocument } =
        change.doc.data();
      const quantity = typeDocument === "instock" ? QuaInStock : -QuaOutStock;
      if (totalQuantityByProduct.hasOwnProperty(productId)) {
        totalQuantityByProduct[productId] += quantity;
      } else {
        totalQuantityByProduct[productId] = quantity;
      }

      // tính toán số lượng tổng nếu typeDocument là "outstock"
      if (typeDocument === "outstock") {
        totalQuantityByProduct[productId] -= quantity;
      }
    });

    const products = Object.keys(totalQuantityByProduct).map((productId) => ({
      productId,
      quantity: totalQuantityByProduct[productId],
    }));

    dispatch({
      type: "GET_QUANTITY",
      payload: products,
    });
  });
};

export default getTotalQuantity;
