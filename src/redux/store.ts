import {
  Action,
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
import { diff } from "jsondiffpatch";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers: Reducer<any, Action> = (state, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      return nextState;
    default:
      return rootReducer(state, action);
  }
};

function bindMiddleware(middleware: any) {
  // Just use redux devtools in dev mode
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
}

const makeStore = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  });

  // 3: Run your sagas on server
  store.sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

// console.clear();
export const wrapper = createWrapper(makeStore, { debug: false });
