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
    case "UPDATE_DOCUMENTS": {
      const { id, createAt, idCustomer, discount, paid } = action.payload;
      const updatedItems = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, createAt, idCustomer, discount, paid };
        }
        return item;
      });
      return { ...state, items: updatedItems };
    }
    default:
      return state;
  }
};

export default documentsReducer;
