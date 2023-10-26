import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginReducer from '../pages/login/Slice';
import studentInfoReducer from '../pages/studentInfo/Slice';
import homePageReducer from '../pages/home/Slice';

export const store = configureStore({
  reducer: {
    studentInfo: studentInfoReducer,
    loginPage: loginReducer,
    homePage: homePageReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
