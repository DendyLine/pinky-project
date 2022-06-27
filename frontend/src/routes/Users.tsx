import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Pagination from 'src/components/Pagination';
import { Preloader } from 'src/components/Preloader';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { fetchUsers, followUser } from 'src/redux/usersSlice';
import 'src/styles/Users.css';

const Users = () => {
  const {usersList, totalUsersCount, isLoading} = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();
  const {search} = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const currentPage = Number(params.get('page') ?? 1);
    dispatch(fetchUsers(currentPage));
  }, [search]);

  const onFollowButton = (id: number) => {
    dispatch(followUser(id));
  };

  return (
    <div>
      {isLoading ? <Preloader /> :
        <div className='users'>
          {usersList.map(user => (
              <div className='user__container'>
                <div className='user__imgButton'>
                  <NavLink to={'/Profile'}>
                  <img className='user__img' src={user.avaUrl} alt='ava' />
                  </NavLink>
                  <button className='user__button' onClick={() => onFollowButton(user.id)}>
                    {user.followed ? 'Unfollow' : 'Follow'}
                  </button>
                </div>
                <div className='user__info'>
                  <div>
                    <div className="user__userName">{user.username}</div>
                    <div className="user__bio">{user.bio}</div>
                  </div>
                  <div className="user__coutryTown">
                    <div>{user.country}</div>
                    <div>{user.town}</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      }
      <Pagination numOfPages={Math.ceil(totalUsersCount / 3)} />

    </div>
  );

};

export default Users;