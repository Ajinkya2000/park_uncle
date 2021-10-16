import React from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";

// Styles Import
import styles from "./Navbar.module.css";

// Image Import
import logo from "../../images/logo.png";

// Action Import
import { logoutUser } from "../../store/actions";

const Navbar = ({ logoutUser }) => {
  const history = useHistory();

  const onHamburgerClick = () => {
    const navHamburger = document.getElementById("navHamburger");
    const navMenu = document.getElementById(navHamburger.dataset.target);

    navHamburger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
  };

  const handleLogout = () => {
    logoutUser(() => {
      history.push("/login");
    });
  };

  return (
    <div className={styles.navWrap}>
      <div className="container">
        <nav
          className="navbar is-white"
          role="navigation"
          aria-label="main navigation"
        >
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
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" href="/">
                Add Spot
              </Link>
              <div className="navbar-item">
                <button className="button is-light" onClick={handleLogout}>
                  Log out
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default connect(null, { logoutUser })(Navbar);
