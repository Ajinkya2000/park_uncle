import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import NavBar from "../Navbar/Navbar";
import BasicMap from "../Map/BasicMap";

// Style Imports
import styles from "./Homepage.module.css";

// Action Imports
import { getUser, getMarkers } from "../../store/actions";

const Homepage = ({ getUser, getMarkers, auth }) => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser(token);
    } else {
      history.push("/login");
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getMarkers();

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {auth && auth.user && (
        <div className={styles.homeWrap}>
          <NavBar />
          <BasicMap />
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
  };
};

export default connect(mapStateToProps, { getUser, getMarkers })(Homepage);
