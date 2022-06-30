import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import FriendList from './FriendList';
import 'src/styles/Nav.css';





const Nav = () => {
  const userId = useAppSelector(state => state.profile.userId)
  const navMenu = [
    {direction: `/profile/${userId}`, name: 'Profile'},
    {direction: '/dialogs', name: 'Messages'},
    {direction: '/news', name: 'News'},
    {direction: '/music', name: 'Music'},
    {direction: '/settings', name: 'Settings'},
    {direction: '/users', name: 'Users'}
  ];
  return (<div>
    <nav className='nav'>
      <ul>
        {navMenu.map(link => <li key={link.direction}><NavLink to={link.direction}>{link.name}</NavLink></li>)}
      </ul>
    </nav>
    <FriendList />
    <div className='achievments'></div>
  </div>);
};
export default Nav;