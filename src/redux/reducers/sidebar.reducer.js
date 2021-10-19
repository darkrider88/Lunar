import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actionTypes";

const initialState = {
    isActive: null
};

export const sidebarReducer = (prevState = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case SIDEBAR_OPEN:
          return {
            ...prevState,
            isActive: payload
          };
          case SIDEBAR_CLOSE:
          return {
            ...prevState,
            isActive: payload
          };
          default: return prevState
        }
}