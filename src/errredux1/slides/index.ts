import { combineReducers } from "redux";

import categorisReducer from "./categories";

const rootReducer = combineReducers({ categories: categorisReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
