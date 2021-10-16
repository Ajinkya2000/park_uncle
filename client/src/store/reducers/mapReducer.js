import { SET_USER_MARKER } from "../../store/actions/types";

const initialState = {
  currentLatitude: 0,
  currentLongitude: 0,
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
