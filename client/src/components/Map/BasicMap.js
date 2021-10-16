import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import styles from "./Map.module.css";

import DrawerWrapper from "./Drawer";

import { connect } from 'react-redux'

import useGeoLocation from "../../hooks/useGeoLocation";


// Config
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const BasicMap = ({ mapState }) => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const location = useGeoLocation();

  const [user, setUser] = useState({
    name: "Syam Prajapathi",
    number: '+91 9985180589',
    address: 'G.B. Road, Mumbai, Tamiznadu, Sri Lanka',
    description: 'so much space very large space badiya h bohot badhiya',
    cars: 2,
    bikes: 2,
    rate: 'free'
  })

  // drawer controls
  const [open, setOpen] = useState(true);


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

  // if (location.loaded && !location.error) {
  //   setLng(location.coordinates.lng);
  //   setLat(location.coordinates.lat);
  // }

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
      <DrawerWrapper user={user} open={open} setopen={setOpen} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mapState: state.mapReducer
  }
}

export default connect(mapStateToProps)(BasicMap);
