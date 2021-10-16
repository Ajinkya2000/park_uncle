import { SET_SHOW_MY_SPOT } from "../actions/types";

const initialState = {
  showMySpots: false,
};

const utilsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_MY_SPOT:
      return {
        ...state,
        showMySpots: action.payload,
      };
    default:
      return state;
  }
};

export default utilsReducer;