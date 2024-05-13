//gom lai truong thong tin
import { combineReducers } from "redux";
import warehouseReducer from "./WarehouseReducer";
import supplierReducer from "./suppliersReducer";
import customersReducer from "./customersReducer";
import productsReducer from "./productReducer";
import pickCustomerReducer from "./customerToOutgoing";
import pickSupplierReducer from "./SupplierToIncoming";

import customerForIncoming from "./customerForIncoming";
import pickProduct from "./pickProduct";
import documentsReducer from "./documentsReducer";
import pickDocument from "./pickDocument";

let reducers = combineReducers({
  warehouseReducer: warehouseReducer,
  supplierReducer: supplierReducer,
  customersReducer: customersReducer,
  productsReducer: productsReducer,
  pickCustomerReducer: pickCustomerReducer,
  pickSupplierReducer: pickSupplierReducer,
  pickProduct: pickProduct,
  documentsReducer: documentsReducer,
  pickDocument: pickDocument,
});
const rootReducer = (state, action) => {
  return reducers(state, action);
};
export default rootReducer;
