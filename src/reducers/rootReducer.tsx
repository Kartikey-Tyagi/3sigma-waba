import { combineReducers } from "redux";
import authReducer from "./authReducer";
import getLogIdReducer from "./logIdReducer";
import userReducer from "./userReducer";
import userDetailsReducer from "./userDetailReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  logId: getLogIdReducer,
  user: userReducer,
  userData: userDetailsReducer,
});
