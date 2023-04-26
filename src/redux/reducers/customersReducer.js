let initialState = {
  items: [],
};

let customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CUSTOMERS": {
      state = { ...state, items: action.payload };
      return state;
    }

    // case "INSERT_SUPPLIERS": {
    //   state.items = [...state.items, action.payload];
    // }
    case "DELETE_CUSTOMERS": {
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

export default customersReducer;
