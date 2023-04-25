let initialState = {
  items: [],
};
let documentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DOCUMENTS": {
      state = { ...state, items: action.payload };
      return state;
    }
    case "INSERT_DOCUMENTS": {
      let newState = { ...state };
      newState = {
        items: [...newState.items, action.payload],
      };
      return newState;
    }
    // case "INSERT_SUPPLIERS": {
    //   state.items = [...state.items, action.payload];
    // }
    // case "DELETE_CUSTOMERS": {
    //   let newState = { ...state };
    //   newState.items = newState.items.filter(
    //     (item) => item.id !== action.payload.id
    //   );
    //   return newState;
    // }
    default:
      return state;
  }
};

export default documentsReducer;
