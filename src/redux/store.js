import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";

// here we have multiple reducers, so we will combine all the reducers into one
const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  {}, //initial states ( but we are geting it from reducers.. coz we have many)
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
