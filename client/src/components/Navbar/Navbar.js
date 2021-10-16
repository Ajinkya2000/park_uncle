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
    <div>
      <div className="container">
      <nav className="navbar has-shadow is-white" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} />
          </a>

          <a
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
            <a className="navbar-item"> Home </a>
            <a className="navbar-item"> Add Spot </a>
            <div className="navbar-item">
              <a className="button is-light"> Log out </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Navbar;
