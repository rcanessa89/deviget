import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";

import { AppAsyncState, AppAsyncStatus } from 'store/store';

export const extraReducersAddDefault = (
    builder: ActionReducerMapBuilder<AppAsyncState<any>>,
    pending: unknown,
    rejected: unknown
) => {
    builder
        .addCase(pending as string, (state, action: PayloadAction<unknown, string, { requestStatus: AppAsyncStatus }>) => {
            state.status = action.meta.requestStatus;
        })
        .addCase(rejected as string, (state, action: PayloadAction<unknown, string, { requestStatus: AppAsyncStatus }>) => {
            state.status = action.meta.requestStatus;
            state.error = action.payload;
        });
}