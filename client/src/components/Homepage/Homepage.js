import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import NavBar from "../Navbar/Navbar";
import BasicMap from "../Map/BasicMap";
import styles from "./Homepage.module.css";

const Homepage = ({ auth }) => {
  return (
    <Fragment>
      {auth.user ? (
        <div className={styles.homeWrap}>
          <NavBar />
          <BasicMap />
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
  };
};

export default connect(mapStateToProps)(Homepage);
