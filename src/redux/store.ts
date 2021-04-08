import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { postSlice } from './slices/post';

export const store = configureStore({
  reducer: {
    post: postSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
