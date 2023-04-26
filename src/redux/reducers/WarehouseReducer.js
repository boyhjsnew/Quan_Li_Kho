let initialState = {
  items: [],
};

let warehouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WAREHOUSE": {
      state = { ...state, items: action.payload };
      return state;
    }
    // case "INSERT_WAREHOUSE": {
    //   // let newState = { ...state };
    //   // const newWareHouse = {
    //   //   ...action.payload,
    //   //   id: state.items.length + 1,
    //   //   quantity: "0.0",
    //   // };
    //   // newState.items = [...newState.items, newWareHouse];
    //   // console.log(newState);
    //   // return newState;
    //   console.log("INSERT");
    // }

    case "DELETE_WAREHOUSE": {
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
export default warehouseReducer;
