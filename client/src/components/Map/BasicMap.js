import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { connect } from "react-redux";

import useGeoLocation from "../../hooks/useGeoLocation";

// Styles
import styles from "./Map.module.css";

// Action import
import { setUserMarker } from "../../store/actions";

// Config
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const BasicMap = ({ mapState, setUserMarker }) => {
  const [helper, setHelper] = useState(true);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const location = useGeoLocation();

  useEffect(() => {

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [mapState.currentLongitude, mapState.currentLatitude],
      zoom: mapState.zoom,
    });

    new mapboxgl.Marker({
      color: "#000",
      draggable: false,
    })
      .setLngLat([mapState.currentLongitude, mapState.currentLatitude])
      .addTo(map.current);

    // eslint-disable-next-line
  }, [helper]);

  useEffect(() => {
    if (location.loaded && !location.error) {
      setUserMarker(location.coordinates.lng, location.coordinates.lat);
      setHelper(!helper);
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mapState: state.mapReducer,
  };
};

export default connect(mapStateToProps, { setUserMarker })(BasicMap);
