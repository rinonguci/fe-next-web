import { combineReducers } from "@reduxjs/toolkit";
import bodyReducer from "./bodyOverflow";
import categoriesReducer from "./categories";
import notifyReducer from "./notify";
import productReducer from "./product";

const rootReducer = combineReducers({
  categoriesReducer,
  notifyReducer,
  bodyReducer,
  productReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
