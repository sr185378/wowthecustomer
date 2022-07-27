import {ADD_NAME} from '../Actions/action';
const initialState = {
    Name: 'Sachin The Great'
  };
  function reducer(state=initialState,action) {
    switch (action.type) {
      case ADD_NAME:
        return {
          Name:'Sri Nivas'
        };

      default: return state;
    }

  }

export default reducer;
