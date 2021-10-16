import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import styles from "./Map.module.css";

import DrawerWrapper from "./Drawer";

import { connect } from 'react-redux'

import useGeoLocation from "../../hooks/useGeoLocation";

// Action import
import { setUserMarker } from "../../store/actions";

// Config
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const BasicMap = ({ mapState, mapMarker, setUserMarker }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const location = useGeoLocation();

  const [user, setUser] = useState({
    name: "Syam Prajapathi",
    number: "+91 9985180589",
    address: "G.B. Road, Mumbai, Tamiznadu, Sri Lanka",
    description: "so much space very large space badiya h bohot badhiya",
    cars: 2,
    bikes: 2,
    rate: "free",
  });

  // drawer controls
  const [open, setOpen] = useState(true);

  const addMarker = (colour, lng, lat) => {
    new mapboxgl.Marker({
      color: colour,
      draggable: false,
    })
      .setLngLat([lng, lat])
      .addTo(map.current);
  };

  useEffect(() => {
    console.log("Rerendered");
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [mapState.currentLongitude, mapState.currentLatitude],
      zoom: mapState.zoom,
    });

    
    mapMarker.markers.map((marker) => {
      addMarker("red", marker.longitude, marker.latitude);
    });
    
    addMarker("#000", mapState.currentLongitude, mapState.currentLatitude);
    // eslint-disable-next-line
  }, [mapState, mapMarker]);

  useEffect(() => {
    if (location.loaded && !location.error) {
      setUserMarker(location.coordinates.lng, location.coordinates.lat);
    }

    // eslint-disable-next-line
  }, [location]);

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
    mapState: state.mapReducer,
    mapMarker: state.markerReducer
  };
};

export default connect(mapStateToProps, { setUserMarker })(BasicMap);
