import React from 'react';
import { useAppSelector } from 'src/redux/store';
import 'src/styles/FriendList.css';

const FriendList = () => {
  const friends = useAppSelector(state => state.profile.friends);
  return (
    <div className='friendList'>
      <div className='friendList__header'>Friends</div>
      <div className='friendList__array'>
        {friends.map(friend => <div><img src={friend.img} alt='' /> {friend.name}</div>)}
      </div>
    </div>
  );
};

export default FriendList;