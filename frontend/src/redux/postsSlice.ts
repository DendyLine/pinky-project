import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api';
import { IPosts } from '../types';
import { TAppState } from './store';

export const deletePost = createAsyncThunk('post/delete', async (id: number) => {
  return api.delete(`/posts/${id}`) as Promise<number>;
});

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
    addCase(fetchPosts.fulfilled, (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    });
    addCase(deletePost.fulfilled, (state, action) => {
      const deletedPostIndex = state.findIndex(post => post.id === action.payload)
      state.splice(deletedPostIndex, 1)
    });
  }
});


export default postsSlice.reducer;