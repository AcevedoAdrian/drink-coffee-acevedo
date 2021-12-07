import React from 'react';
import CardWidget from '../CardWidget/CardWidget';
import { Link } from 'react-router-dom';
// Logo
import logo from '../../assets/img/logo.svg'
// Estilos
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className="navbar-link">
        <img className='navbar-logo' src={logo} alt='Logo de la tienada drink coffe' /></Link>
      {/* Menu */}
      <ul className='ul-navbar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/category/30">Ibu igual a 30</Link></li>
        <li><Link to="/category/60">Ibu igual a 60</Link></li>
      </ul>
      {/* Iciono carrito*/}
      <CardWidget />
    </nav>
  )
}

export default NavBar;