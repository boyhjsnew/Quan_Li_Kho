let initialState = {
  items: [],
};
let documentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DOCUMENTS": {
      state.items = action.payload;
      console.log(state.items);
    }
    case "INSERT_DOCUMENTS": {
      state.items = action.payload;
      console.log(state.items);
      return state;
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
