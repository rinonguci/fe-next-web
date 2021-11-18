import { Action, AnyAction, configureStore, Reducer } from "@reduxjs/toolkit";
import { Context, createWrapper, HYDRATE } from "next-redux-wrapper";

import createSagaMiddleware from "redux-saga";
import rootReducer from "./slides";
import rootSaga from "./sagas";

const reducers: Reducer<any, Action> = (state, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state,
        ...action.payload,
      };
      return nextState;
    default:
      return rootReducer(state, action);
  }
};

const makeStore = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware),
  });

  // 3: Run your sagas on server
  store.sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
