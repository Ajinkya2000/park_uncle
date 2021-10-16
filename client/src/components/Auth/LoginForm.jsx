import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Auth/loginform.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({ mobile: "", password: "" });
  const [loadingUser, setLoadingUser] = useState(false);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setLoadingUser(true);
    await setLoadingUser(formData);
    setLoadingUser(false);
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
              value={formData.mobile}
              type="tel"
              placeholder="Enter mobile number"
              pattern="[0-9]{10}"
              onChange={(event) =>
                setFormData({ ...formData, mobile: event.target.value })
              }
              onInvalid="this.setCustomValidity('Please enter a valid mobile number')"
              onInput="this.setCustomValidity('')"
              required
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon="phone-alt" />
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
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
              onInvalid="this.setCustomValidity('Please enter a password')"
              onInput="this.setCustomValidity('')"
              required
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon="lock" />
            </span>
          </div>
        </div>
        <div className="field mt-5">
          <p className="control">
            <button
              type="submit"
              className={loadingUser ? "is-loading" : ""}
              class="button is-large is-fullwidth login-button"
            >
              <p className="is-size-5">Sign In</p>
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
