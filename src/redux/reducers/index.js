//gom lai truong thong tin
import { combineReducers } from "redux";
import warehouseReducer from "./warehouseReducer";
import supplierReducer from "./suppliersReducer";

let reducers = combineReducers({
  warehouseReducer: warehouseReducer,
  supplierReducer: supplierReducer,
});
const rootReducer = (state, action) => {
  return reducers(state, action);
};
export default rootReducer;
