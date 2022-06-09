import React, { useEffect } from 'react';
import { fetchPosts } from 'src/redux/postsSlice';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import s from 'src/styles/myPosts.module.css';
import Post from './Post';

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