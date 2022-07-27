import {ADD_ITEM,OPEN_MODAL,CLOSE_MODAL} from '../Actions/action';
const initialState = {
    Cart:[],
    openModal:false,
  };
  function reducer(state=initialState,action) {
    switch (action.type) {
      case ADD_ITEM:
        return {
          ...state,
          Cart:[...state.Cart, action.payload],
        };
      case OPEN_MODAL:
        return {
          ...state,
          openModal: true
        };
      case CLOSE_MODAL:
        return {
          ...state,
           openModal: false
        };
      default: return state;
    }

  }

export default reducer;
