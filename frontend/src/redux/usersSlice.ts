import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api';
import { IUser } from '../types';

export const followUser = createAsyncThunk('user/follow', async (id: number) => {
  return api.patch(`/users/${id}/follow`) as Promise<IUser>;
});

export const fetchUsers = createAsyncThunk('users/all', async () => {
  return api.get('/users?page=2') as Promise<IUser[]>;
});

const usersSlice = createSlice({
  name: 'poniesUsers',
  initialState: {
    usersList: [] as IUser[],
    pageSize: 5,
    totalUsersCount: 9,
    currentPage: 1,

  },
  reducers: {},
  extraReducers: ({addCase}) => {
    addCase(fetchUsers.fulfilled, (state, action) => {
      state.usersList = action.payload;
    });
    addCase(followUser.fulfilled, (state, action) => {
      const index = state.usersList.findIndex(user => user.id === action.payload.id);
      state.usersList[index] = action.payload;
    });
  }
});

export default usersSlice.reducer;
