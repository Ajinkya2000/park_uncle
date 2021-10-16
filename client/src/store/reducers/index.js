import { combineReducers } from "redux";

import authReducer from "./authReducer";
import mapReducer from "./mapReducer";
import markerReducer from "./markerReducer";
import utilsReducer from "./utilsReducer";

export default combineReducers({
  authReducer,
  mapReducer,
  markerReducer,
  utilsReducer
});
