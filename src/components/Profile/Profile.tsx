import React from 'react';
import s from './Profile.module.css';
import NewPost from './newPost/NewPost';
import MyPosts from './MyPosts/MyPosts';
import { useAppSelector } from '../../redux/store';

const Profile = () => {
  const {avatarUrl, backgroundUrl, bio, fullName} = useAppSelector(state => state.profile);
  return (
    <div className={s.profile}>
      <div className={s.avatarBack}>
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
        <div className={s.NameDescription}>
          <b>{fullName}</b>
          <div className={s.description}>
            {bio}
          </div>
        </div>
      </div>
      </div>

        <div className={s.PostsInput}>
      <NewPost />
      <MyPosts />
        </div>
    </div>
  );
};
export default Profile;