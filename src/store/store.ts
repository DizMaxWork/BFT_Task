import { configureStore } from "@reduxjs/toolkit";
import selectionSlice from "../slices/selectionSlice";
export const store = configureStore({
  reducer: {
    selection: selectionSlice,
  },
});
