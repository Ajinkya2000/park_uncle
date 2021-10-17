import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import styles from "./Map.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DrawerWrapper from "./Drawer";

import { connect } from "react-redux";

import useGeoLocation from "../../hooks/useGeoLocation";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Action import
import { setUserMarker, getMarkerDetails } from "../../store/actions";

// Config
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const BasicMap = ({
  auth,
  mapState,
  mapMarker,
  showMySpot,
  setUserMarker,
  getMarkerDetails,
}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const location = useGeoLocation();

  // drawer controls
  const [open, setOpen] = useState(false);

  const addMarker = (userMarker) => {
    const color = userMarker.userId === auth.user._id ? "green" : "red";
    const marker = new mapboxgl.Marker({
      color,
      draggable: false,
    })
      .setLngLat([userMarker.longitude, userMarker.latitude])
      .addTo(map.current);

    marker.getElement().addEventListener("click", () => {
      setOpen(true);
      getMarkerDetails(userMarker);
    });
  };

  const addCurrentUserMarker = (colour, lng, lat) => {
    new mapboxgl.Marker({
      color: colour,
      draggable: false,
    })
      .setLngLat([lng, lat])
      .addTo(map.current);
  };

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [mapState.currentLongitude, mapState.currentLatitude],
      zoom: mapState.zoom,
    });

    const renderedMarkers = mapMarker.markers.filter((marker) => {
      if (showMySpot) {
        return marker.userId === auth.user._id;
      } else {
        return marker.userId !== auth.user._id;
      }
    });

    for (let marker of renderedMarkers) {
      addMarker(marker);
    }

    addCurrentUserMarker(
      "#000",
      mapState.currentLongitude,
      mapState.currentLatitude
    );

    return () => {
      map.current.remove();
    };

    // eslint-disable-next-line
  }, [mapState, mapMarker.markers, showMySpot]);

  useEffect(() => {
    if (location.loaded && !location.error) {
      setUserMarker(location.coordinates.lng, location.coordinates.lat);
    }

    // eslint-disable-next-line
  }, [location]);


  return (
    <div className={styles.mapWrapper}>
      <div ref={mapContainer} className={styles.mapContainer} />
      {showMySpot && (
        <Link to="/addslot" className={`${styles.addSlotBtn} button is-info`}>
          <FontAwesomeIcon icon={faPlus} />
          Add Parking Spot
        </Link>
      )}
      <div className={`box ${styles.tooltip}`}>
        <div>
          <div className={styles.d1} />
          <p>My Parking Spots</p>
        </div>
        <div>
          <div className={styles.d2} />
          <p>My Location</p>
        </div>
        <div>
          <div className={styles.d3} />
          <p>Available Parking Spots</p>
        </div>
      </div>
      <DrawerWrapper open={open} setopen={setOpen} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
    mapState: state.mapReducer,
    mapMarker: state.markerReducer,
    showMySpot: state.utilsReducer.showMySpots,
  };
};

export default connect(mapStateToProps, { setUserMarker, getMarkerDetails })(
  BasicMap
);
