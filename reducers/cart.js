  export default function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      return [
        ...state, action.payload
      ]
      break;
    }
    case "UPDATE_CART": {
      return state.map((item, index) => {
          if(index !== action.index) {
              return item;
          }
          
          return [
              ...state,
              ...action.payload
          ]    
      });
    }
    case "REMOVE_ITEM": {      
      const itemIndex = state.findIndex(i => i.item === action.payload);

      // let newArray = state.slice();
      // newArray.splice(index, 1);
      // return newArray;

      return state.filter((item, index) => index != itemIndex);
    }
  }

  return state;
}