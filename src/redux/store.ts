import {
  AnyAction,
  applyMiddleware,
  CombinedState,
  configureStore,
  createReducer,
  createStore,
  Reducer,
  ReducersMapObject,
  Store,
} from "@reduxjs/toolkit";
import { Context, createWrapper, HYDRATE } from "next-redux-wrapper";

import createSagaMiddleware, { Task } from "redux-saga";
import rootReducer from "./slides";
import rootSaga from "./sagas";

const reducers: Reducer<any, AnyAction> | ReducersMapObject<any, AnyAction> = (
  state,
  action
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

export const makeStore = (context: Context) => {
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
export type AppStore = ReturnType<typeof makeStore>;
