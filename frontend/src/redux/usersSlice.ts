import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api';
import { IUser } from '../types';

export const followUser = createAsyncThunk('user/follow', async (id: number) => {
  return api.patch(`/users/${id}/follow`) as Promise<IUser>;
});

export const fetchUsers = createAsyncThunk('users/all', async (page: number) => {
  return api.get(`/users?page=${page}`) as Promise<{users: IUser[], total:number}>;
});

const usersSlice = createSlice({
  name: 'poniesUsers',
  initialState: {
    usersList: [] as IUser[],
    totalUsersCount: 0,
    isLoading: false
  },
  reducers: {},
  extraReducers: ({addCase}) => {
    addCase(fetchUsers.fulfilled, (state, action) => {
      state.usersList = action.payload.users;
      state.totalUsersCount = action.payload.total;
      state.isLoading = false
    });
    addCase(fetchUsers.pending, (state, action)=>{
      state.isLoading = true
    })
    addCase(followUser.fulfilled, (state, action) => {
      const index = state.usersList.findIndex(user => user.id === action.payload.id);
      state.usersList[index] = action.payload;
    });
  }
});

export default usersSlice.reducer;
