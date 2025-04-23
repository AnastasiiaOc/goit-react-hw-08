import { createSlice } from '@reduxjs/toolkit';

// export const selectNameFilter = state => state.filters.name;  TAKEN TO SELECTORS
const slice = createSlice({
  name: 'filters',
  initialState: {
    name: "",
  },


reducers:{
    changeFilter:(state, action) => {
        state.name = action.payload;
      },
}}
)
export const { changeFilter } = slice.actions;  //export actions for dispatch
export default slice.reducer;



//fromFiltersSlice.js hw 7