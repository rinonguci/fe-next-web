import { combineReducers } from "@reduxjs/toolkit";

import bodyReducer from "./bodyOverflow";
import breadcrumbReducer from "./breadcrumb";
import notifyReducer from "./notify";

const uiStateReducers = combineReducers({
  bodyReducer,
  breadcrumbReducer,
  notifyReducer,
});
export default uiStateReducers;
