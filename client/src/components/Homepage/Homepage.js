import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import NavBar from "../Navbar/Navbar";
import BasicMap from "../Map/BasicMap";
import styles from "./Homepage.module.css";

const Homepage = ({ user }) => {
  const history = useHistory();

  useEffect(() => {
    if (user == null) {
      history.push("/register");
    }
  }, []);

  return (
    <div className={styles.homeWrap}>
      <NavBar />
      <BasicMap />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Homepage);
