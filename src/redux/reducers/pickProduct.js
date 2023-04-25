let initialState = {
  items: [],
};

let pickProduct = (state = initialState, action) => {
  switch (action.type) {
    case "INSERT_PRODUCT": {
      state.items = { ...action.payload };
      console.log(state.items);
      return state;
    }
    default:
      return state;
  }
};

export default pickProduct;
