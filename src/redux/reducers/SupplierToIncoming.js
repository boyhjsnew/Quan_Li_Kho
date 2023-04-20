let initialState = {
  items: "",
};

let pickSupplierReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PICK_SUPPLIER": {
      state.items = action.payload;
      return state;
    }
    default:
      return state;
  }
};

export default pickSupplierReducer;
