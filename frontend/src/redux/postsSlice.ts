import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [
    {like: 10, message: 'Pinkie, you sure i need this?', userName: 'Rainbow Dash'},
    {like: 23, message: 'That\'s some kind of mail?', userName: 'Rainbow Dash'},
    {like: 55, message: 'look, i\'m so cool!', userName: 'Rainbow Dash'},
    {like: 3, message: 'hey Applejack, may i take more sidr?', userName: 'Rainbow Dash'},
    {like: 46, message: 'fast and furious!', userName: 'Rainbow Dash'}
  ],
  reducers: {
    addPost(state, action) {
      state.push({like: 0, message: action.payload, userName: 'Rainbow Dash'});
    }
  }
});

export const {addPost} = postsSlice.actions;

export default postsSlice.reducer;