import React from 'react';
import s from './myPosts.module.css';
import Post from './Post';
import { useAppSelector } from '../../../redux/store';

const MyPosts = () => {
  const posts = useAppSelector(state => state.posts);

  return (
    <div className={s.myPosts}>
      {posts.map(post => <Post key={post.message} like={post.like} message={post.message} userName={post.userName} />)}
    </div>
  );
};

export default MyPosts;