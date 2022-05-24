import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import FriendList from './FriendList/FriendList';


const navMenu = [
  {direction: '/profile', name: 'Profile'},
  {direction: '/dialogs', name: 'Messages'},
  {direction: '/news', name: 'News'},
  {direction: '/music', name: 'Music'},
  {direction: '/settings', name: 'Settings'}
];


const Nav = (props: INavProps) => {
  return (<nav className='nav'>
    <ul>
      {navMenu.map(link => <li key={link.direction}><NavLink to={link.direction}>{link.name}</NavLink></li>)}
    </ul>
  </nav>
    <FriendList/>
    <div className="achievments"></div>
  </div>);
};
export default Nav;