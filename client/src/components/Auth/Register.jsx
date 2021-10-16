import React from "react";
import RegisterForm from "./RegisterForm";

import { Link } from 'react-router-dom'

import UncleParkDetails from "../UncleParkDetails/UncleParkDetails";
import "../../styles/Auth/register.css";

const Register = () => {
  return (
    <div class="auth-container">
      <div class="wrapper custom-center">
        <div class="register-container columns">
          <UncleParkDetails />
          <div class="column container-right custom-center">
            <section class="right-wrapper">
              <section class="right-header">
                <h1 class="title is-size-3-desktop is-size-4-touch">
                  Sign Up to <span class="socially-ly">Uncle</span>Park.
                </h1>
                <p class="content has-text-grey">
                  Already have an account?
                  <Link to="/" class="login-link">
                    Login
                  </Link>
                </p>
              </section>
              <section class="register-form mb-5">
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
