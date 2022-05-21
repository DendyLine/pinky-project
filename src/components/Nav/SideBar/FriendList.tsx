import React from 'react';
import s from './FriendList.module.css';

interface INavProps {
  friendList: {img: string, name: string}[];
}


const FriendList = (props: INavProps) => {
  return (
    <div>
      <h2>Friends</h2>
      <div className={s.friendList}>
        {props.friendList.map(friend => <div><img src={friend.img} alt='' /> {friend.name}</div>)}
      </div>
    </div>
  );
};

export default FriendList;