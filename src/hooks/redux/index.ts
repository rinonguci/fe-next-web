import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/slides";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
