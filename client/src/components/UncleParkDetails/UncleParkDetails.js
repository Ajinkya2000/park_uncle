import React from "react";
import onlineConnection from '../../assets/onlineConnection.svg';
import "../../styles/UncleParkDetails/unclepark.css";

const UncleParkDetails = () => {
  return (
    <section className="column container-left">
      <div className="header">
        <h1 className="title is-size-2-desktop is-size-3-touch">
          <span className="title-text-ly">Uncle</span>Park.
        </h1>
        <p className="content has-text-grey is-size-6">
          Find a perfect place to <br />
          park your vehicle
        </p>
      </div>
      <section className="image-container custom-center">
        <img src={onlineConnection} alt="unclepark" />
      </section>
    </section>
  );
};

export default UncleParkDetails;
