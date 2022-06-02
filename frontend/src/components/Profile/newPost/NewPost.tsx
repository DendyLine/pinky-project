import React, { ChangeEvent, useState } from 'react';
import s from './newPost.module.css';
import { addPost } from '../../../redux/postsSlice';
import { useAppDispatch } from '../../../redux/store';

const NewPost = () => {
  const [postText, setPostText] = useState('');
  const dispatch = useAppDispatch();

  const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostText(e.target.value);
  };

  const createPost = () => {
    dispatch(addPost(postText));
    setPostText('');
  };

  return <div className={s.newPost}>
    <input value={postText} onChange={onPostChange} type='text' />
    <button onClick={createPost}>send</button>
  </div>;
};
export default NewPost;