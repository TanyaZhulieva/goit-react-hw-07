import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    value: "",
  },
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const getFilters = (state) => state.filters.value;

export const { setFilter } = slice.actions;

export default slice.reducer;