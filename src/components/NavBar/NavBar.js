import React from 'react';
import './NavBar.css'
import logo from '../../assets/img/logo.svg'
import CardWidget from '../CardWidget/CardWidget';
const NavBar = () => {
  return (
    <nav className='navbar'>
      <a href="#!" className="navbar-link">
        <img className='navbar-logo' src={logo} alt='Logo de la tienada drink coffe' /></a>
      {/* Menu */}
      <ul className='ul-navbar'>
        <li><a href='!#' >Inicio</a></li>
        <li><a href='!#' >Producto</a></li>
        <li><a href='!#' >Contacto</a></li>
        <li><a href='!#' >Nosotros</a></li>
      </ul>
      {/* Icon */}
      <CardWidget />
    </nav>
  )
}

export default NavBar;