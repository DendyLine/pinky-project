import React, { useEffect } from 'react';
import s from './Profile.module.css';
import NewPost from './newPost/NewPost';
import MyPosts from './MyPosts/MyPosts';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchUser } from '../../redux/profileSlice';

const Profile = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.profile.currentUser)
  useEffect(()=>{
    dispatch(fetchUser(5))
    }
  )
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