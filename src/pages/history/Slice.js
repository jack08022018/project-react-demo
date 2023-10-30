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
      console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
      console.log(`REACT_APP_ENVIRONMENT: ${process.env.REACT_APP_ENVIRONMENT}`);
      console.log(`REACT_APP_FOO: ${process.env.REACT_APP_FOO}`);
      console.log(`REACT_APP_BAR: ${process.env.REACT_APP_BAR}`);
      state.count = state.count + 1;
    },
  },
});

export const { incrementCount } = Slice.actions;

export default Slice.reducer;

