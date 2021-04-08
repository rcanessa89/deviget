import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { extraReducersAddDefault } from 'utils/extra-reducers-add-default';

import { httpRequest } from 'utils/http-request';
import { mapPostData } from 'utils/map-posts-data';
import { AppAsyncThunkOptions, AppAsyncState } from '../store';

const POST_SLICE_NAME = 'posts';

interface PostState {
  after?: string;
  children: {
    [key: string]: any;
  };
}

const initialState: AppAsyncState<PostState> = {
  status: 'idle',
  data: {
    children: {}
  }
};

export const fetchPosts = createAsyncThunk<any, void, AppAsyncThunkOptions>(
  `${POST_SLICE_NAME}/fetchTop`,
  async (payload, thunkApi) => {
    const url = '/r/all/top.json';
    const limit = 50;
    const after = thunkApi.getState().post.data?.after;
    const res = await httpRequest({
      url,
      params: {
        after,
        limit
      }
    });

    return {
      after: res.data.data.after,
      children: mapPostData(res.data.data.children)
    };
  }
);

export const postSlice = createSlice({
  name: POST_SLICE_NAME,
  initialState,
  reducers: {
    dismissPost: (state, action: PayloadAction<string>) => {
      delete state.data.children[action.payload];
    },
    dismissAll: (state) => {
      state.status = 'idle';
      state.data.children = {};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = action.meta.requestStatus;
      state.data = action.payload;
    });

    extraReducersAddDefault(builder, fetchPosts.pending, fetchPosts.rejected);
  }
});
