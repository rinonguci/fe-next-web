import { ICategory } from "@interfaces/redux";
import { createAction } from "@reduxjs/toolkit";

export const getCategories = createAction("GET_CATEGORIES");
export const getCategoriesSuccess = createAction<any>("GET_CATEGORIES_SUCCESS");
export const getCategoriesError = createAction<string>("GET_CATEGORIES_ERROR");
