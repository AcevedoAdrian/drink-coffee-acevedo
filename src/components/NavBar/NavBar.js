import React from 'react';
import './NavBar.css'
import logo from '../../img/logo.svg'
const NavBar = () => {
  return (
    <nav className='navbar'>
      <img className='navbar-logo' src={logo} alt='coderhouse logo' />
      <ul className='ul-navbar'>
        <li><a href='!#' >Inicio</a></li>
        <li><a href='!#' >Producto</a></li>
        <li><a href='!#' >Contacto</a></li>
        <li><a href='!#' >Nosotros</a></li>
        <li><a href='!#' >Carrito</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;