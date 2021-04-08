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
  Action
>;
export interface AppAsyncThunkOptions<Extra = void> {
  dispatch: AppDispatch;
  state: RootState;
  extra: Extra;
}
export type AppAsyncStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';
export interface AppAsyncState<D = {}, E = unknown> {
  status: AppAsyncStatus;
  data: D;
  error?: E;
}
