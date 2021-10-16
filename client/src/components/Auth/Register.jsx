import React from "react";
import RegisterForm from "./RegisterForm";

import { Link } from "react-router-dom";

import UncleParkDetails from "../UncleParkDetails/UncleParkDetails";
import "../../styles/Auth/register.css";

const Register = () => {
  return (
    <div className="auth-container">
      <div className="wrapper custom-center">
        <div className="register-container columns">
          <UncleParkDetails />
          <div className="column container-right custom-center">
            <section className="right-wrapper">
              <section className="right-header">
                <h1 className="title is-size-3-desktop is-size-4-touch">
                  Sign Up to <span className="socially-ly">Uncle</span>Park.
                </h1>
                <p className="content has-text-grey">
                  Already have an account?
                  <Link to="/login" className="login-link">
                    Login
                  </Link>
                </p>
              </section>
              <section className="register-form mb-5">
                <RegisterForm />
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
