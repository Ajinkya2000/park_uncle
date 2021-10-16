import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Icons
import {
  faUser,
  faPhoneAlt,
  faAt,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

// Styles Import
import "../../styles/Auth/registerform.css";

// Actions Import
import { userSignup } from "../../store/actions";

const RegisterForm = ({ userSignup, auth }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    userSignup(formData, () => {
      history.push("/");
    });
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} className="form">
        <div className="field">
          {/* <p className="help is-danger">{msg}</p> */}

          <label className="label has-text-grey">Name</label>
          <div className="control has-icons-left">
            <input
              className="input"
              value={formData.name}
              type="text"
              placeholder="Enter your name"
              onChange={handleChange}
              name="name"
              required
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label has-text-grey">Mobile number</label>
          <div className="control has-icons-left">
            <input
              className="input"
              value={formData.phone}
              type="tel"
              placeholder="Enter mobile number"
              pattern="[0-9]{10}"
              onChange={handleChange}
              name="phone"
              required
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label has-text-grey">Email</label>
          <div className="control has-icons-left">
            <input
              className="input"
              value={formData.email}
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              name="email"
              required
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faAt} />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label has-text-grey">Password</label>
          <div className="control has-icons-left">
            <input
              className="input"
              value={formData.password}
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
              name="password"
              required
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </div>
        </div>
        <div className="field mt-5">
          <p className="control">
            <button
              type="submit"
              className={`button is-large is-fullwidth register-button ${
                auth.loading ? "is-loading" : ""
              }`}
            >
              <p className="is-size-5">Create an account</p>
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
  };
};

export default connect(mapStateToProps, { userSignup })(RegisterForm);
