import React, { useState, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddSlot.css"

// Icons
import {
  faUser,
  faClone,
  faRupeeSign,
  faPhoneAlt,
  faCar,
  faMotorcycle,
} from "@fortawesome/free-solid-svg-icons";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const SlotForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
    description: "",
    numberOfCars: "",
    numberOfBikes: "",
    longitude: "",
    latitude: "",
    phone: "",
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
        latitude: e.result.center[1]
      })
    });
    
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <form className="box">
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
          <label className="label">Number of Cars</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="number"
              min="0"
              placeholder="Enter the numer of cars"
              value={userInfo.numberOfCars}
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  numberOfCars: event.target.value,
                })
              }
              required
              />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faCar} />
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Number of Bikes</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="number"
              min="0"
              placeholder="Enter the numer of bikes"
              value={userInfo.numberOfBikes}
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  numberOfBikes: event.target.value,
                })
              }
              required
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faMotorcycle} />
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
                  rate: event.target.value,
                })
              }
              required
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faRupeeSign} />
            </span>
          </div>
        </div>

        <div className="field">
          <button className="button is-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default SlotForm;
