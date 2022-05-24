import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    id: 1,
    fullName: 'Rainbow Dash',
    avatarUrl: 'https://i.pinimg.com/originals/48/87/e9/4887e9f60f9bb30847baf69d7cc99863.jpg',
    backgroundUrl: '/images/Hat.jpg',
    bio: 'best Thunderbolt ever!',
    friends: [
      {id: 2, img: '/images/Applejack.webp', name: 'Applejack'},
      {id: 3, img: '/images/Pinkie_Pie.webp', name: 'Pinkie Pie'},
      {id: 4, img: '/images/Twilight.webp', name: 'Twilight'}
    ]
  },
  reducers: {}
});

export default profileSlice.reducer;