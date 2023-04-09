import {
  INSERT_WAREHOUSE,
  DELETE_WAREHOUSE,
} from "../constants/constWarehouse";

let initialState = {
  listWarehouse: {
    items: [],
  },
};

let warehouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_WAREHOUSE:
      return { ...state, listWarehouse: action.payload };
    default:
      return state;
  }
};
export default warehouseReducer;
