let initialState = {
    items: ''
      };
      
      let customerForIncoming= (state = initialState, action) => {
        switch (action.type) {
          case "PICK_FOR_INCOMING": {
            state.items = action.payload;
            return state
          }
          default: return state
        }
      };
      
      export default customerForIncoming;
      