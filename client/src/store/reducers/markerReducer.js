import { GET_MARKERS, GET_MARKER_DETAILS } from "../actions/types";

const initialState = {
  markers: [],
  markerDetails: null,
};

const markerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MARKERS:
      return {
        ...state,
        markers: action.payload,
      };
    case GET_MARKER_DETAILS:
      return {
        ...state,
        markerDetails: action.payload,
      };
    default:
      return state;
  }
};

export default markerReducer;
