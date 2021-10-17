import React from "react";
import LoginForm from "./LoginForm";

import { Link } from "react-router-dom";

import UncleParkDetails from "../UncleParkDetails/UncleParkDetails";
import "../../styles/Auth/login.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="wrapper custom-center">
        <div className="register-container columns">
          <UncleParkDetails />
          <div className="column container-right custom-center">
            <section className="right-wrapper">
              <section className="right-header">
                <h1 className="title is-size-3-desktop is-size-4-touch">
                  Sign In to <span className="socially-ly">Uncle</span>Park.
                </h1>
                <p className="content has-text-grey">
                  Don't have an account? &nbsp;
                  <Link to="/register" className="login-link">
                    Create an account
                  </Link>
                </p>
              </section>
              <section className="register-form mb-5">
                <LoginForm />
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
