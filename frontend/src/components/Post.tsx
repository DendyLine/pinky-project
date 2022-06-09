import React from 'react';
import s from 'src/styles/post.module.css';

interface IPostProps {
  like: number,
  message: string
  userName: string
  avaUrl: string
}

const Post = (props: IPostProps) => {
  return (
    <div className={s.post}>
      <div className={s.postUp}>
        <img src={props.avaUrl} alt='' />
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