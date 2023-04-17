//gom lai truong thong tin
import { combineReducers } from "redux";
import warehouseReducer from "./warehouseReducer";
import supplierReducer from "./suppliersReducer";
import customersReducer from "./customersReducer";
import productsReducer from "./productReducer";

let reducers = combineReducers({
  warehouseReducer: warehouseReducer,
  supplierReducer: supplierReducer,
  customersReducer: customersReducer,
  productsReducer: productsReducer,
});
const rootReducer = (state, action) => {
  return reducers(state, action);
};
export default rootReducer;
