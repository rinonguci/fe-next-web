import * as toolkit from "@reduxjs/toolkit";
import { Task } from "redux-saga";

declare module "@reduxjs/toolkit" {
  interface Store {
    sagaTask: Task;
  }
}
