import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import FriendList from './SideBar/FriendList';

interface INavProps {
  friendList: {img: string, name: string}[];
  menu: {direction: string, name: string}[];
}

const Nav = (props: INavProps) => {
  return (<nav className='nav'>
    <ul>
      {props.menu.map(link => <li key={link.direction}><NavLink to={link.direction}>{link.name}</NavLink></li>)}
    </ul>

    <FriendList friendList={props.friendList} />
  </nav>);
};
export default Nav;