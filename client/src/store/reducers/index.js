import { combineReducers } from "redux";

import authReducer from "./authReducer";
import mapReducer from "./mapReducer";
import markerReducer from "./markerReducer";

export default combineReducers({
  authReducer,
  mapReducer,
  markerReducer
});
