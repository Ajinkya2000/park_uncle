import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import styles from "./Map.module.css";
import Drawer from 'rsuite/Drawer';
import Button from 'rsuite/Button';
import { connect } from 'react-redux'

import useGeoLocation from "../../hooks/useGeoLocation";


// Action import
import { setUserMarker } from "../../store/actions";

// Config
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const BasicMap = ({ mapState, setUserMarker }) => {
  const [helper, setHelper] = useState(true);

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
      <Drawer backdrop={true} size="xs" placement='left' open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>Parking Details</Drawer.Title>
          <Drawer.Actions>
            <Button color="green" appearance="primary" onClick={() => setOpen(false)}>Book</Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <p className='title is-2 is-spaced'>{user.name}</p>
          <p className='subtitle is-4'>{user.number}</p>
          <p className='subtitle is-6'>{user.address}</p>
          <p className='subtitle is-6'>{user.description}</p>
          <p className='subtitle is-6'>Cars: {user.cars}</p>
          <p className='subtitle is-6'>Bikes: {user.bikes}</p>
          <p className='subtitle is-6'>Price: {user.rate}&#8377;</p>
          <Button color="green" appearance="primary" onClick={() => setOpen(false)}>Book</Button>
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mapState: state.mapReducer,
  };
};

export default connect(mapStateToProps, { setUserMarker })(BasicMap);
