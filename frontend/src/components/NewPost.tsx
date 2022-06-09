import React, { ChangeEvent, useState } from 'react';
import { sendPost } from 'src/redux/postsSlice';
import { useAppDispatch } from 'src/redux/store';
import s from 'src/styles/newPost.module.css';

const NewPost = () => {
  const [postText, setPostText] = useState('');
  const dispatch = useAppDispatch();

  const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostText(e.target.value);
  };

  const createPost = () => {
    dispatch(sendPost(postText));
    setPostText('');
  };

  return <div className={s.newPost}>
    <input value={postText} onChange={onPostChange} type='text' />
    <button onClick={createPost}>send</button>
  </div>;
};
export default NewPost;