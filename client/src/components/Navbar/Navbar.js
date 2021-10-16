import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

// Styles Import
import styles from "./Navbar.module.css";

// Image Import
import logo from "../../images/logo.png";

// Action Import
import { logoutUser, setShowMySpot } from "../../store/actions";

const Navbar = ({ logoutUser, setShowMySpot }) => {
  const history = useHistory();

  const onHamburgerClick = () => {
    const navHamburger = document.getElementById("navHamburger");
    const navMenu = document.getElementById(navHamburger.dataset.target);

    navHamburger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
  };

  const handleSpotClick = (spotState) => {
    setShowMySpot(spotState);
  }

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
              <div className="navbar-item">
                <button className="button" onClick={() => handleSpotClick(false)}>
                  Book a spot
                </button>
              </div>
              <div className="navbar-item">
                <button className="button" onClick={() => handleSpotClick(true)}>
                  My Spots
                </button>
              </div>
              <div className="navbar-item">
                <button className="button has-text-white-bis has-background-danger-dark" onClick={handleLogout}>
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

export default connect(null, { logoutUser, setShowMySpot })(Navbar);
