//gom lai truong thong tin
import { combineReducers } from "redux";
import warehouseReducer from "./warehouseReducer";
import supplierReducer from "./suppliersReducer";
import customersReducer from "./customersReducer";
import productsReducer from "./productReducer";
import pickCustomerReducer from "./customerToOutgoing";
import pickSupplierReducer from "./SupplierToIncoming";

import customerForIncoming from "./customerForIncoming";

let reducers = combineReducers({
  warehouseReducer: warehouseReducer,
  supplierReducer: supplierReducer,
  customersReducer: customersReducer,
  productsReducer: productsReducer,
  pickCustomerReducer: pickCustomerReducer,
  pickSupplierReducer: pickSupplierReducer,
});
const rootReducer = (state, action) => {
  return reducers(state, action);
};
export default rootReducer;
