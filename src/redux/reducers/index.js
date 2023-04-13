//gom lai truong thong tin
import { combineReducers } from "redux";
import warehouseReducer from "./warehouseReducer";
import supplierReducer from "./suppliersReducer";
import customersReducer from "./customersReducer";

let reducers = combineReducers({
  warehouseReducer: warehouseReducer,
  supplierReducer: supplierReducer,
  customersReducer: customersReducer,
});
const rootReducer = (state, action) => {
  return reducers(state, action);
};
export default rootReducer;
