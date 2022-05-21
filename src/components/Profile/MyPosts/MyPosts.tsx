import React from 'react';
import s from './myPosts.module.css';
import Post from './Post';
import { useAppSelector } from '../../../redux/store';

interface IMyPostsProps {
  postsData: {like: number, message: string}[];
}

const MyPosts = (props: IMyPostsProps) => {
  let postElement = props.postsData
    .map(post => <Post key={post.message} like={post.like} message={post.message} />);
  return <div className={s.myPosts}>
    {postElement}
  </div>;
};

export default MyPosts;