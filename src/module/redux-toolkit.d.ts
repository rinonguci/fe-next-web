import * as toolkit from "@reduxjs/toolkit";
import { Task, Store as StoreRedux } from "redux-saga";
import { Persistor } from "redux-persist";

declare module "@reduxjs/toolkit" {
  interface Store extends StoreRedux {
    sagaTask: Task;
    __persistor: Persistor;
  }
}
