import { createSlice } from "@reduxjs/toolkit";

export const personSlice = createSlice({
  name: "person",
  initialState: {
    value: {
      name: String(localStorage.getItem("name") || ""),
      surname: String(localStorage.getItem("surname") || ""),
    },
  },
  reducers: {
    setName: (state, { payload }: { payload: string }) => {
      state.value.name = payload;
      localStorage.setItem("name", payload);
    },
    setSurname: (state, { payload }: { payload: string }) => {
      state.value.surname = payload;
      localStorage.setItem("surname", payload);
    },
  },
});

export const { setName, setSurname } = personSlice.actions;
export const personReducer = personSlice.reducer;
