import React from 'react';
import './Header.css'
const Header = ({ title }) => {
  return (
    <header className='header-background'>
      <h1 className='title-store'>{title}</h1>
    </header>
  );
}

export default Header;