let initialState = {
items: ''
  };
  
  let pickCustomerReducer = (state = initialState, action) => {
    switch (action.type) {
      case "PICK_CUSTOMERS": {
        state.items = action.payload;
        return state
      }
      default: return state
    }
  };
  
  export default pickCustomerReducer;
  