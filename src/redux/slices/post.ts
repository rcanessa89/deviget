import { createSlice } from '@reduxjs/toolkit';

export interface PostState {
    status: 'idle' | 'loading' | 'success' | 'failed';
    error?: string;
    data: any[];
}

const initialState: PostState = {
    status: 'idle',
    data: []
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {}
});

