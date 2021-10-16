import { GET_MARKERS } from "../actions/types";

const initialState = {
  markers: [],
};

const markerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MARKERS:
      return {
        ...state,
        markers: action.payload
      };
    default:
      return state;
  }
};

export default markerReducer;
