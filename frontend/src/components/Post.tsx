import React from 'react';
import 'src/styles/post.css';

interface IPostProps {
  like: number,
  message: string
  userName: string
  avaUrl: string
}

const Post = (props: IPostProps) => {
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
      </div>
    </div>
  );
};

export default Post;