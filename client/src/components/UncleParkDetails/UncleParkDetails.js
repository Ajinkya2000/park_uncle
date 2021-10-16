import React from "react";
import "../../styles/UncleParkDetails/unclepark.css";

const UncleParkDetails = () => {
  return (
    <section className="column container-left">
      <div className="header">
        <h1 className="title is-size-2-desktop is-size-3-touch">
          <span className="title-text-ly">Uncle</span>Park.
        </h1>
        <p className="content has-text-grey is-size-6">
          Connect with your Friends and <br />
          Create memories
        </p>
      </div>
      <section className="image-container custom-center">
        <img src="../../assets/onlineConnection.svg" alt="" />
      </section>
    </section>
  );
};

export default UncleParkDetails;
