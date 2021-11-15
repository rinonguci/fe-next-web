import { combineReducers } from "@reduxjs/toolkit";

import categoriesReducer from "./categories";
import productReducer from "./product";

const dataReducers = combineReducers({ productReducer, categoriesReducer });
export default dataReducers;
