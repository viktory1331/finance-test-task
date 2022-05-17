import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Share } from './interfaces';

export interface SharedReducer {
  data: Share[];
  error: null | string;
};

const initialState = { data: [], error: null } as SharedReducer;

export const sharedReducer = createSlice({
  name: 'shares',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { actions, reducer } = sharedReducer;
