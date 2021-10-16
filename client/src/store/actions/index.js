import unclePark from "../../api/unclePark";

import { USER_SIGNUP, SET_ERROR } from "./types";

// Signup User
export const userSignup = (userData, redirect) => async (dispatch) => {
  try {
    const { data } = await unclePark.post("/signup", userData);
    dispatch({
      type: USER_SIGNUP,
      payload: data,
    });

    redirect();
  } catch (err) {
    dispatch({
        type: SET_ERROR,
        payload: err.response.data
    })
  }
};
