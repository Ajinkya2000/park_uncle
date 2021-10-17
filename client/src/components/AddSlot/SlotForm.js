import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./AddSlot.css";

// Action Import
import { addMarker } from "../../store/actions";

// Icons
import {
  faUser,
  faClone,
  faRupeeSign,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const SlotForm = ({ auth, addMarker }) => {
  const [userInfo, setUserInfo] = useState({
    name: auth.user.name || "",
    email: auth.user.email || "",
    userId: auth.user._id || "",
    address: "",
    description: "",
    longitude: "",
    latitude: "",
    phone: auth.user.phone || "",
    rate: "",
  });

  useEffect(() => {
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      types: "country,region,place,postcode,locality,neighborhood",
    });
    geocoder.addTo("#geocoder");

    geocoder.on("result", (e) => {
      setUserInfo({
        ...userInfo,
        address: e.result.place_name,
        longitude: e.result.center[0],
        latitude: e.result.center[1],
      });
    });

    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    addMarker(userInfo);
  };

  return (
    <>
      <form className="box" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="Enter Your Name"
              value={userInfo.name}
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  name: event.target.value,
                })
              }
              required
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Mobile Number</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="tel"
              placeholder="Enter your mobile number"
              pattern="[0-9]{10}"
              value={userInfo.phone}
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  phone: event.target.value,
                })
              }
              required
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Address</label>
          <div id="geocoder"></div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control has-icons-left has-icons-right">
            <textarea
              className="input"
              type="text"
              placeholder="Description"
              value={userInfo.description}
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  description: event.target.value,
                })
              }
              required
            ></textarea>
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faClone} />
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Price</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="number"
              min="0"
              placeholder="Enter the price of Parking "
              value={userInfo.rate}
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  rate: parseInt(event.target.value),
                })
              }
              required
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faRupeeSign} />
            </span>
          </div>
        </div>
        <button className="button is-primary mt-4" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
  };
};

export default connect(mapStateToProps, { addMarker })(SlotForm);
