//put firebase things here

import {
  LOAD_PROFILE,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actionTypes";

// this is a login function which is returning a dispatch function
export const login = () => (dispatch) => {
  try {
    //   first we will fire a dispatch for loader, until we authenticate the user
    dispatch({
      type: LOGIN_REQUEST,
    });
    // do firebase auth here

    // --------------- save the toke in accesstoken
    const accessToken = "testToken";
    const profile = {
      user: "rider",
      img: "something",
    };
    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });
    // now sending the profile
    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (e) {
    console.log(e.message);
    dispatch({
      type: LOGIN_FAILED,
      payload: e.message,
    });
  }
};

export const logout = () => (dispatch) => {
  try {
    // destroy the session here

    // sending the dispatch
    dispatch({
      type: LOGOUT,
    });
  } catch (e) {
    console.log(e.message);
    dispatch({
      type: LOGIN_FAILED,
      payload: e.message,
    });
  }
};
