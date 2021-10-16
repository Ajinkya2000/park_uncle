import React, { useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import {connect} from 'react-redux'

import useGeoLocation from "../../hooks/useGeoLocation";

// Styles
import styles from "./Map.module.css";

// Config
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const BasicMap = ({mapState}) => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const location = useGeoLocation();

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [mapState.currentLongitude, mapState.currentLatitude],
      zoom: mapState.zoom,
    });
  });  

  // useEffect(() => {
  //   // location.loaded ? console.log(JSON.stringify(location)) : console.log("Please allow location!!")

  //   if(location.loaded && !location.error) {
  //     setLng(location.coordinates.lng);
  //     setLat(location.coordinates.lat);
  //   }

  // }, [location]);

  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on("move", () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //   });
  // });
  return (
    <div className={styles.mapWrapper}>
      <div ref={mapContainer} className={styles.mapContainer} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mapState: state.mapReducer
  }
}

export default connect(mapStateToProps)(BasicMap);
