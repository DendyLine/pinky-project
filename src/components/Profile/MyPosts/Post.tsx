import React from 'react';
import s from './post.module.css';

interface IPostProps {
  like: number,
  message: string
}

const Post = (props: IPostProps) => {
  return (
    <div className={s.post}>
      <img src='https://i.pinimg.com/originals/48/87/e9/4887e9f60f9bb30847baf69d7cc99863.jpg' alt='' />
      {props.message}
      <div>
        {props.like} like
      </div>
    </div>
  );
};

export default Post;