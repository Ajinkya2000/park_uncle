import { USER_SIGNUP } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

export default authReducer;
