import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [
    {like: 10, message: 'Pinkie, you sure i need this?'},
    {like: 23, message: 'That\'s some kind of mail?'},
    {like: 55, message: 'look, i\'m so cool!'},
    {like: 3, message: 'hey Applejack, may i take more sidr?'},
    {like: 46, message: 'fast and furious!'}
  ],
  reducers: {
    addPost(state, action) {
      state.push({like: 0, message: action.payload});
    }
  }
});

export const {addPost} = postsSlice.actions;

export default postsSlice.reducer;