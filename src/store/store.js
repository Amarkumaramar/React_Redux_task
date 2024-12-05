import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for managing the input value
const inputSlice = createSlice({
  name: 'input',
  initialState: { value: '' },
  reducers: {
    setInputValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setInputValue } = inputSlice.actions;

// Create the Redux store
const store = configureStore({
  reducer: {
    input: inputSlice.reducer,
  },
});

export default store;
