import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api';
import { IUser } from '../types';

export const fetchUser = createAsyncThunk('user/one', async (id: number) => {
  return api.get(`/users/${id}`) as Promise<IUser>;
});

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    currentUser: {} as IUser,
    friends: [
      {id: 2, img: '/images/Applejack.jpg', name: 'Applejack'},
      {id: 3, img: '/images/Pinkie_Pie.jpg', name: 'Pinkie Pie'},
      {id: 4, img: '/images/Twilight.jpg', name: 'Twilight'}
    ]
  },
  reducers: {},
  extraReducers: ({addCase}) => {
    addCase(fetchUser.fulfilled, (state, action) => {
      state.currentUser = action.payload
    });
  }})
export default profileSlice.reducer;