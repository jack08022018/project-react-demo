import { 
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const Slice = createSlice({
  name: 'historyPage',
  initialState,
  reducers: {
    incrementCount: (state, action) => {
      state.count = state.count + 1;
    },
  },
});

export const { incrementCount } = Slice.actions;

export default Slice.reducer;

