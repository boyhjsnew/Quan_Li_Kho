let initialState = {
  items: [],
};

let productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS": {
      state.items = action.payload;
    }

    // case "INSERT_SUPPLIERS": {
    //   state.items = [...state.items, action.payload];
    // }
    case "DELETE_PRODUCTS": {
      let newState = { ...state };
      newState.items = newState.items.filter(
        (item) => item.id !== action.payload.id
      );
      return newState;
    }
    default:
      return state;
  }
};

export default productsReducer;
