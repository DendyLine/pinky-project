import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import './Users.css';
import { fetchUsers, followUser } from '../../redux/usersSlice';

const Users = () => {
  const usersList = useAppSelector(state => state.users.usersList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const onFollowButton = (id: number) => {
    dispatch(followUser(id));
  };

  return (
    <div className='users'>
      {usersList.map(user => (
          <div className='user__container'>
            <div className='user__img-button'>
              <img className='user__img' src={user.avaUrl} />
              <button className='user__button' onClick={() => onFollowButton(user.id)}>
                {user.followed ? 'Unfollow' : 'Follow'}
              </button>
            </div>
            <div className='user__info'>
              <div>
                <div>{user.username}</div>
                <div>{user.bio}</div>
              </div>
              <div>
                <div>{user.country}</div>
                <div>{user.town}</div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );

};

export default Users;