import React from 'react';
import { NavLink } from 'react-router-dom';
import 'src/styles/header.css';

const Header = () => {

  return (<div className='header'>
    <header><img
      src='https://play-lh.googleusercontent.com/giGOGWKlJJzOJ7KX6M2mbszLmD1dXGOaRIKpcb2MijBit6UHtBGpfWla2KnVYkpjbA'
      alt=''
    />
    </header>
    <span className='header__networkName'>
    TOWN
    </span>
    <span className='Header__auth'>
      <NavLink to='/sign-up/'>sign up</NavLink>
      <NavLink to='/sign-in/'>sign in</NavLink>
    </span>
  </div>);
};

export default Header;