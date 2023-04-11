//gom lai truong thong tin
import { combineReducers } from "redux";
import warehouseReducer from "./warehouseReducer";

let reducers = combineReducers({
  warehouseReducer: warehouseReducer,
});
const rootReducer = (state, action) => {
  return reducers(state, action);
};
export default rootReducer;
