import { combineReducers } from "@reduxjs/toolkit";

import bodyReducer from "./bodyOverflow";
import breadcrumbReducer from "./breadcrumb";
import loadingReducer from "./loading";
import notifyReducer from "./notify";

const uiStateReducers = combineReducers({
  bodyReducer,
  breadcrumbReducer,
  notifyReducer,
  loadingReducer,
});
export default uiStateReducers;
