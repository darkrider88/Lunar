// this has the intial state and assigns the updated payload

import {
  LOAD_PROFILE,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actionTypes";

const initialState = {
  accessToken: null,
  user: null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  // destructoring the things from action
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };

    case LOGIN_REQUEST:
      return { ...prevState, loading: true };
    case LOGIN_FAILED:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };
    case LOGOUT:
      return {
        ...prevState,
        accessToken: null,
      };
    default:
      return prevState;
  }
};
