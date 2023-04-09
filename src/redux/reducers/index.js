//gom lai truong thong tin
import { combineReducers } from "redux";
import warehouseReducer from "./WarehouseReducer";

let reducers = combineReducers({
  listWarehouse: warehouseReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};
export default rootReducer;
