import React from 'react';
import s from './FriendList.module.css';
import { useAppSelector } from '../../../redux/store';

const FriendList = () => {
  const friends = useAppSelector(state => state.profile.friends);
  return (
    <div>
      <h2>Friends</h2>
      <div className={s.friendList}>
        {friends.map(friend => <div><img src={friend.img} alt='' /> {friend.name}</div>)}
      </div>
    </div>
  );
};

export default FriendList;