import { GET_USER, LOGOUT_USER, USER_SIGNIN, USER_SIGNUP } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
    case USER_SIGNIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload
      }

    case LOGOUT_USER:
      localStorage.removeItem('token');
      return {
        token: null,
        user: null
      }
    default:
      return state;
  }
};

export default authReducer;
