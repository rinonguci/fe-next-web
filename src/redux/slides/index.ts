import { combineReducers } from "@reduxjs/toolkit";

import commonReducers from "./common";
import uiReducers from "./ui";
import productReducers from "./product";
import userReducers from "./user";

const rootReducers = combineReducers({
  commonReducers,
  uiReducers,
  productReducers,
  userReducers,
});

export default rootReducers;
export type RootState = ReturnType<typeof rootReducers>;
