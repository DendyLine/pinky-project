import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    id: 1,
    fullName: 'Rainbow Dash',
    avatarUrl: 'https://i.pinimg.com/originals/48/87/e9/4887e9f60f9bb30847baf69d7cc99863.jpg',
    backgroundUrl: 'https://media.rawg.io/media/screenshots/38a/38a834019a8740cd002fe872c07f782d.JPG',
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