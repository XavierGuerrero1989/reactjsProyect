
import React from 'react'
import './navbar.css'


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list--item"> <a className="navbar__list--link" href='#'>Home</a> </li>
        <li className="navbar__list--item"> <a className="navbar__list--link" href='#'>Nuestros Productos</a> </li>
        <li className="navbar__list--item"> <a className="navbar__list--link" href='#'>Sobre Nosotros</a> </li>
        <li className="navbar__list--item"> <a className="navbar__list--link" href='#'>Productos Especiales</a> </li>
        <li className="navbar__list--item"> <a className="navbar__list--link" href='#'>Contacto</a> </li>
      </ul>
    </nav>
  )
}

export default Navbar