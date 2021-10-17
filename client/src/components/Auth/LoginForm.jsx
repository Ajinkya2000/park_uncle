import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Icons
import { faPhoneAlt, faLock } from "@fortawesome/free-solid-svg-icons";

// Styles Import
import "../../styles/Auth/loginform.css";

// Action Import
import { userSignin } from "../../store/actions";

const LoginForm = ({ userSignin, auth }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({ phone: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    userSignin(formData, () => {
      history.push("/");
    });
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} className="form mb-6">
        <div className="field">
          <label className="label has-text-grey">Mobile number</label>
          <div className="control has-icons-left">
            <div className="input">
              <p className="stdcode">{formData.phone ? '+91' : ''}</p>
              <input
                className="phone-input"
                value={formData.phone}
                type="tel"
                placeholder="Enter 10 digit mobile number"
                pattern="[0-9]{10}"
                onChange={handleChange}
                name="phone"
                required
              />
            </div>
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faPhoneAlt} />
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
              className={`button is-large is-fullwidth login-button ${
                auth.loading ? "is-loading" : ""
              }`}
            >
              <p className="is-size-5">Sign In</p>
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

export default connect(mapStateToProps, { userSignin })(LoginForm);
