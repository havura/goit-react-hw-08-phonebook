import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { filter: '' },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { setFilter } = filtersSlice.actions;
