import React from 'react';
import s from './Profile.module.css';
import NewPost from './newPost/NewPost';
import MyPosts from './MyPosts/MyPosts';
import { useAppSelector } from '../../redux/store';

const Profile = () => {
  const {avatarUrl, backgroundUrl, bio, fullName} = useAppSelector(state => state.profile);


  return (
    <div className={s.profile}>
      <img
        className={s.back}
        src={backgroundUrl}
        alt=''
      />
      <div className={s.avatarFullName}>
        <img
          className={s.avatar}
          src={avatarUrl}
          alt='avatar'
        />
        <b>{fullName}</b>
      </div>
      {bio}
      <NewPost />
      <MyPosts />
    </div>
  );
};
export default Profile;