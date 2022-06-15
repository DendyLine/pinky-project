import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api';
import { INews } from '../types';

export const fetchNews = createAsyncThunk('news/all', async (page: number) => {
  return api.get(`/news?page=${page}`) as Promise<{news: INews[], total:number}>;
});

const newsSlice = createSlice({
  name: 'PoniesNews',
  initialState: {
    newsList: [] as INews[],
    totalNewsCount: 0,
  },
  reducers: {},
  extraReducers: ({addCase}) => {
    addCase(fetchNews.fulfilled, (state, action) => {
      state.newsList = action.payload.news;
      state.totalNewsCount = action.payload.total;
    });

  }
});

export default newsSlice.reducer;
