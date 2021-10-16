import React from 'react';
import styles from './Navbar.module.css'
import logo from '../../images/logo.png';

const Navbar = () => {
  const onHamburgerClick = () => {
    const navHamburger = document.getElementById("navHamburger");
    const navMenu = document.getElementById(navHamburger.dataset.target);
    
    navHamburger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
  }

  return (
    <div className={styles.navWrap}>
      <div className="container">
      <nav className="navbar is-white" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} alt="logo" />
          </a>

          <button
            id="navHamburger"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navLinks"
            onClick={onHamburgerClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navLinks" className="navbar-menu">
          <div id="navLinksEnd" className="navbar-end">
            <a className="navbar-item" href="/"> Home </a>
            <a className="navbar-item" href="/"> Add Spot </a>
            <div className="navbar-item">
              <a className="button is-light" href="/"> Log out </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Navbar;
