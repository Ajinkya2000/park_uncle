import React from 'react'

const Navbar = () => {
  function onHamburgerClick() {
    const navHamburger = document.getElementById("navHamburger");
    const navMenu = document.getElementById(navHamburger.dataset.target);
    
    navHamburger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
  }
  return (
    <div>
      <div class="container">
      <nav class="navbar has-shadow is-white" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>

          <a
            role="button"
            id="navHamburger"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navLinks"
            onclick="onHamburgerClick()"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navLinks" class="navbar-menu">
          <div id="navLinksEnd" class="navbar-end">
            <a class="navbar-item"> Home </a>

            <a class="navbar-item"> About </a>
            
            <a class="navbar-item"> Contact </a>

            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light"> Log in </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Navbar
