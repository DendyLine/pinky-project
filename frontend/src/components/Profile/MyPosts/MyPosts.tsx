import React, { useEffect } from 'react';
import s from './myPosts.module.css';
import Post from './Post';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { fetchPosts } from '../../../redux/postsSlice';

const MyPosts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts);
  const {currentUser} = useAppSelector(state => state.profile);
  useEffect(() => {
      dispatch(fetchPosts());
    }, []
  );
  return (
    <div className={s.myPosts}>
      {posts.map(post => <Post
        key={post.message}
        like={post.like}
        message={post.message}
        userName={currentUser.username}
        avaUrl={currentUser.avaUrl}
      />)}
    </div>
  );
};

export default MyPosts;