import React from 'react';
import { deletePost } from 'src/redux/postsSlice';
import { useAppDispatch } from 'src/redux/store';
import 'src/styles/post.css';

interface IPostProps {
  id: number
  like: number,
  message: string
  userName: string
  avaUrl: string
}


const Post = (props: IPostProps) => {
  const dispatch = useAppDispatch();

  const onDeleteButton = () => {
    const currentPost = props.id
    dispatch(deletePost(currentPost));

  };

  return (
    <div className='profile__myPosts--post'>
      <div className='profile__post--up'>
        <img src={props.avaUrl} alt='' />
        <div className='profile__post--text'>
          <div>
            {props.userName}
          </div>
          <div>
            {props.message}
          </div>
        </div>
      </div>
      <div>
        {props.like} like
        <button onClick={onDeleteButton} >x</button>
      </div>
    </div>
  );
};

export default Post;