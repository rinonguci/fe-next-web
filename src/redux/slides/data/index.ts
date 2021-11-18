import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import categoriesReducer from "./categories";
import productReducer from "./product";

const dataReducers = combineReducers({
  productReducer,
  categoriesReducer,
  authReducer,
});
export default dataReducers;
