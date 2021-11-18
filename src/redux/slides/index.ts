import { combineReducers } from "@reduxjs/toolkit";
import categoriesReducers from "./categories";

import commonReducers from "./common";
import productReducers from "./product";
import authReducers from "./auth";

const rootReducers = combineReducers({
  commonReducers,
  productReducers,
  categoriesReducers,
  authReducers,
});

export default rootReducers;
export type RootState = ReturnType<typeof rootReducers>;
