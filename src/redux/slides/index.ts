import {
  AnyAction,
  CombinedState,
  combineReducers,
  Reducer,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import dataReducers from "./data";
import uiStateReducers from "./uiState";

const rootReducers = combineReducers({
  dataReducers,
  uiStateReducers,
});

export default rootReducers;
export type RootState = ReturnType<typeof rootReducers>;
