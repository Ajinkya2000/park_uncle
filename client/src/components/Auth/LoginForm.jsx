import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Icons
import { faPhoneAlt, faLock } from "@fortawesome/free-solid-svg-icons";

// Styles Import
import "../../styles/Auth/loginform.css";

// Action Import
import {userSignin} from '../../store/actions'

const LoginForm = ({userSignin}) => {
  const history = useHistory();
  const [formData, setFormData] = useState({ phone: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    userSignin(formData, () => {
      history.push('/dashboard');
    })
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} className="form mb-6">
        <div className="field">
          {/* <p className="help is-danger">{msg}</p> */}

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
              className="button is-large is-fullwidth login-button"
            >
              <p className="is-size-5">Sign In</p>
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default connect(null, {userSignin})(LoginForm);
