import React from 'react';
import logo from '../../images/logo.png';

const Navbar = () => {
  const onHamburgerClick = () => {
    const navHamburger = document.getElementById("navHamburger");
    const navMenu = document.getElementById(navHamburger.dataset.target);

    navHamburger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
  }

  return (
    <div className="container">
      <nav className="navbar has-shadow is-white" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} alt="logo" />
          </a>

          <a
            href
            role="button"
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
          </a>
        </div>

        <div id="navLinks" className="navbar-menu">
          <div id="navLinksEnd" className="navbar-end">
            <a href className="navbar-item"> Home </a>
            <a href className="navbar-item"> Add Spot </a>
            <div className="navbar-item">
              <a className="button is-light" href> Log out </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
