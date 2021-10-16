import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Auth/registerform.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [helptext, setHelptext] = useState("");
  const [loadingUser, setLoadingUser] = useState(false);
  const [msg, setMsg] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== confirmPassword) {
      setHelptext("Passwords doesn't match");
      setFormData({ ...formData, password: "" });
      setConfirmPassword("");
      return;
    }
    setLoadingUser(true);
    await this.registerUser(this.formData);

    this.msg = this.getErrMsg;
    this.loadingUser = false;

    setFormData({
      name: "",
      mobile: "",
      email: "",
      password: "",
    });

    setConfirmPassword("");
    setHelptext("");
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} className="form">
        <div className="field">
          <p className="help is-danger">{{ msg }}</p>

          <label for="" className="label has-text-grey">
            Name
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              value={formData.name}
              type="text"
              placeholder="Enter your name"
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.name })
              }
              oninvalid="this.setCustomValidity('Please enter a name')"
              oninput="this.setCustomValidity('')"
              required
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon="user" />
            </span>
          </div>
        </div>
        <div className="field">
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
              oninvalid="this.setCustomValidity('Please enter a valid mobile number')"
              oninput="this.setCustomValidity('')"
              required
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon="phone-alt" />
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
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
              oninvalid="this.setCustomValidity('Please enter a valid email')"
              oninput="this.setCustomValidity('')"
              required
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon="at" />
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
              oninvalid="this.setCustomValidity('Please enter a password')"
              oninput="this.setCustomValidity('')"
              required
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon="lock" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label has-text-grey">Confirm Password</label>
          <div className="control has-icons-left">
            <input
              className="input"
              value={confirmPassword}
              type="password"
              placeholder="Enter password"
              onChange={(event) => setConfirmPassword(event.target.value)}
              oninvalid="this.setCustomValidity('Please confirm password')"
              oninput="this.setCustomValidity('')"
              required
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon="key" />
            </span>
          </div>
          <p className="help is-danger">{{ helptext }}</p>
        </div>
        <div className="field mt-5">
          <p className="control">
            <button
              type="submit"
              className={
                loadingUser
                  ? "is-loading button is-large is-fullwidth register-button"
                  : "button is-large is-fullwidth register-button"
              }
            >
              <p className="is-size-5">Create an account</p>
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
