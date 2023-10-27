import { 
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  isAuthorized: false
};

export const Slice = createSlice({
  name: 'LoginPage',
  initialState,
  reducers: {
    setAuthorized: (state, action) => {
      state.isAuthorized = action.payload;
    },
  },
});

export const { setAuthorized } = Slice.actions;

export default Slice.reducer;
