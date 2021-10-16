import { HIDE_MODAL, SET_SHOW_MY_SPOT, SHOW_MODAL } from "../actions/types";

const initialState = {
  showMySpots: false,
  showModal: false,
};

const utilsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_MY_SPOT:
      return {
        ...state,
        showMySpots: action.payload,
      };
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      };

    default:
      return state;
  }
};

export default utilsReducer;
