import React, { useEffect } from 'react';
import MyPosts from 'src/components/MyPosts';
import NewPost from 'src/components/NewPost';
import { fetchUser } from 'src/redux/profileSlice';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import 'src/styles/Profile.css';

const Profile = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.profile.currentUser);
  useEffect(() => {
      dispatch(fetchUser(5));
    }
  );
  return (
    <div className='profile'>
      <div className='profile__background'>
        <img
          className='profile__hat'
          src='/images/Hat.jpg'
          alt=''
        />
        <div className='profile__avatarFullName'>
          <img
            className='profile__avatar'
            src={user.avaUrl}
            alt='avatar'
          />
          <div className='profile__nameDescription'>
            <b>{user.username}</b>
            <div className='profile__description'>
              {user.bio}
            </div>
          </div>
        </div>
      </div>

      <div className='profile__posts--input'>
        <NewPost />
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;