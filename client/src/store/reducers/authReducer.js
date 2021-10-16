import {
  GET_USER,
  LOGOUT_USER,
  SET_LOADING,
  REMOVE_LOADING,
  USER_SIGNIN,
  USER_SIGNUP,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  loading: null,
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
        loading: false,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        token: null,
        user: null,
        loading: null,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
