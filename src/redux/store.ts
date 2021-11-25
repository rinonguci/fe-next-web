import {
  Action,
  AnyAction,
  configureStore,
  Reducer,
  Store,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import createSagaMiddleware from "redux-saga";
import rootReducer, { RootState } from "./slices";
import rootSaga from "./sagas";
import { Persistor } from "redux-persist";

const reducers: Reducer<any, Action> = (state, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      let payload = { ...action.payload };

      // Eliminate client-side stores
      delete payload.userReducers;

      const nextState = {
        ...state,
        ...payload,
      };
      return nextState;
    default:
      return rootReducer(state, action);
  }
};

const makeStore: (Store<RootState> & Persistor) | any = () => {
  const sagaMiddleware = createSagaMiddleware();

  const ISSERVER = typeof window === "undefined";
  if (ISSERVER) {
    const store: Store<RootState> = configureStore({
      reducer: reducers,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware),
    });

    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
  } else {
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "nextjs",
      storage,
      whitelist: ["userReducers"],
    };

    const store: Store<RootState> = configureStore({
      reducer: persistReducer(persistConfig, reducers),
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware),
    });

    let per = persistStore(store);

    store.__persistor = per;
    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
  }
};

export const wrapper = createWrapper(makeStore, { debug: false });
