import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPosts } from '../types';
import api from '../api';
import { TAppState } from './store';


export const fetchPosts = createAsyncThunk('posts/all', async () => {
  return api.get('/posts') as Promise<IPosts[]>;
});
export const sendPost = createAsyncThunk('post/send', async (postText: string, {getState}) => {

  return api.post('/posts', {
    message: postText,
    like: 0,
    userId: (getState() as TAppState).profile.currentUser.id
  }) as Promise<IPosts>;
});
const postsSlice = createSlice({
  name: 'posts',
  initialState: [] as IPosts[],
  reducers: {},
  extraReducers: ({addCase}) => {
    addCase(sendPost.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    addCase(fetchPosts.fulfilled, (state, action)=>{
      state.length=0
      state.push(...action.payload)
    })
  }
});

export default postsSlice.reducer;