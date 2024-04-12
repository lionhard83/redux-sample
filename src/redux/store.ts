import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { themeReducer } from "./themeSlice";
import { personReducer } from "./personSlice";
import { fakeJSONPlaceholedApi } from "./fakeApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // contesto/state
    theme: themeReducer, // contesto/state
    person: personReducer, // contesto/state,
    [fakeJSONPlaceholedApi.reducerPath]: fakeJSONPlaceholedApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeJSONPlaceholedApi.middleware),
});

store.subscribe(() => {
  console.log(
    "Lo stato dell'applicazione è stato aggiornato:",
    store.getState()
  );
});

export type State = ReturnType<typeof store.getState>;
