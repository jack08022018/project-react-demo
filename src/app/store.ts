import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mainLayoutReducer from '../layouts/mainLayout/Slice';
import loginReducer from '../pages/login/Slice';
import homePageReducer from '../pages/home/Slice';
import historyPageReducer from '../pages/history/Slice';

export const store = configureStore({
  reducer: {
    mainLayout: mainLayoutReducer,
    loginPage: loginReducer,
    homePage: homePageReducer,
    historyPage: historyPageReducer,
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
