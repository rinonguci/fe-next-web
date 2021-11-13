import { combineReducers } from "@reduxjs/toolkit";
import bodyReducer from "./bodyOverflow";
import categoriesReducer from "./categories";
import notifyReducer from "./notify";

const rootReducer = combineReducers({
  categoriesReducer,
  notifyReducer,
  bodyReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
