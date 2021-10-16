import React from "react";
import NavBar from "../Navbar/Navbar";
import BasicMap from "../Map/BasicMap";
import styles from './Homepage.module.css'

const Homepage = () => {
  return (
    <div className={styles.homeWrap}>
      <NavBar />
      <BasicMap />
    </div>
  );
};

export default Homepage;
