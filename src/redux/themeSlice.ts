import { createSlice } from "@reduxjs/toolkit";

type ThemeType = "light" | "dark";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "light",
  } as { value: ThemeType },
  reducers: {
    toggle: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
    setTheme: (state, action: { payload: ThemeType }) => {
      state.value = action.payload;
    },
  },
});

export const { toggle, setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
