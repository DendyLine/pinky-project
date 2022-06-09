import React, { useEffect } from 'react';
import MyPosts from 'src/components/MyPosts';
import NewPost from 'src/components/NewPost';
import { fetchUser } from 'src/redux/profileSlice';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import s from 'src/styles/Profile.module.css';

const Profile = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.profile.currentUser);
  useEffect(() => {
      dispatch(fetchUser(5));
    }
  );
  return (
    <div className={s.profile}>
      <div className={s.avatarBack}>
        <img
          className={s.back}
          src='/images/Hat.jpg'
          alt=''
        />
        <div className={s.avatarFullName}>
          <img
            className={s.avatar}
            src={user.avaUrl}
            alt='avatar'
          />
          <div className={s.NameDescription}>
            <b>{user.username}</b>
            <div className={s.description}>
              {user.bio}
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