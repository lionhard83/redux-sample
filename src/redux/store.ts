// e il contenitore di tutti gli stati

import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { themeReducer } from "./themeSlice";

const reducer = {
  counter: counterReducer, // contesto
  theme: themeReducer, // contesto
};

export const store = configureStore({
  reducer,
});

export type State = ReturnType<typeof store.getState>;
