import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import FriendList from './FriendList/FriendList';


const navMenu = [
  {direction: '/profile', name: 'Profile'},
  {direction: '/dialogs', name: 'messages'},
  {direction: '/news', name: 'news'},
  {direction: '/music', name: 'music'},
  {direction: '/settings', name: 'settings'}
];


const Nav = (props: INavProps) => {
  return (<nav className='nav'>
    <ul>
      {navMenu.map(link => <li key={link.direction}><NavLink to={link.direction}>{link.name}</NavLink></li>)}
    </ul>

    <FriendList />
  </nav>);
};
export default Nav;