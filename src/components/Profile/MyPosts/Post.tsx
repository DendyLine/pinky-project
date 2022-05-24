import React from 'react';
import s from './post.module.css';

interface IPostProps {
  like: number,
  message: string
  userName: string
}

const Post = (props: IPostProps) => {
  return (
    <div className={s.post}>
      <div className={s.postUp}>
      <img src='https://i.pinimg.com/originals/48/87/e9/4887e9f60f9bb30847baf69d7cc99863.jpg' alt='' />
        <div className={s.NameMessage}>
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