let initialState = {
    items: ''
      };
      
      let supplierForOutgoing = (state = initialState, action) => {
        switch (action.type) {
          case "PICK_FOR_OUTGOING": {
            state.items = action.payload;
            return state
          }
          default: return state
        }
      };
      
      export default supplierForOutgoing;
      