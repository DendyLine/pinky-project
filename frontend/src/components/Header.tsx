import React from 'react';
import s from 'src/styles/header.module.css';

const Header = () => {
  return (<div className={s.header}>
    <header><img
      src='https://play-lh.googleusercontent.com/giGOGWKlJJzOJ7KX6M2mbszLmD1dXGOaRIKpcb2MijBit6UHtBGpfWla2KnVYkpjbA'
      alt=''
    />
    </header>
    <span className={s.name}>
    TOWN
    </span>
  </div>);
};

export default Header;