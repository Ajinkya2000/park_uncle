import { SET_USER_MARKER } from "../../store/actions/types";

const initialState = {
  currentLatitude: 27.1767,
  currentLongitude: 78.0081,
  zoom: 9,
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_MARKER:
      return {
        ...state,
        currentLatitude: action.payload.newLatitude,
        currentLongitude: action.payload.newLongitude,
      };
    default:
      return state;
  }
};

export default mapReducer;
