let initialState = {
  items: "",
};

let pickDocument = (state = initialState, action) => {
  switch (action.type) {
    case "PICK_DOCUMENT": {
      state.items = action.payload;
      console.log(state.items);
      return state;
    }
    default:
      return state;
  }
};

export default pickDocument;
