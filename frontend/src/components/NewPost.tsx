import React, { ChangeEvent, useState } from 'react';
import { sendPost } from 'src/redux/postsSlice';
import { useAppDispatch } from 'src/redux/store';
import 'src/styles/newPost.css';

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

  return <div className='profile__newPost'>
    <input value={postText} onChange={onPostChange} type='text' />
    <button onClick={createPost}>→</button>
  </div>;
};
export default NewPost;