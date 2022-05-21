import React from 'react';
import s from './newPost.module.css';

interface INewPostProps {
  newTextPost: string
  addPost: (PostMessage: string) => void;
  dispatch:(action: any)=> void
}

const NewPost = (props: INewPostProps) => {

  let onPostChange = (e: any) => {
    props.dispatch({type: 'UPDATE-POST-TEXT', newText: e.target.value});
  };

  let createPost = () => {

    props.dispatch({type: 'ADD-POST'});
  };


  return <div className={s.newPost}>
    <input value={postText} onChange={onPostChange} type='text' />
    <button onClick={createPost}>send</button>
  </div>;
};
export default NewPost;