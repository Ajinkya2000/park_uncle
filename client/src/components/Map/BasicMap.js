import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import styles from "./Map.module.css";

import DrawerWrapper from "./Drawer";

import { connect } from "react-redux";

import useGeoLocation from "../../hooks/useGeoLocation";

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
      if(showMySpot) {
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
      <DrawerWrapper open={open} setopen={setOpen} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
    mapState: state.mapReducer,
    mapMarker: state.markerReducer,
    showMySpot: state.utilsReducer.showMySpots
  };
};

export default connect(mapStateToProps, { setUserMarker, getMarkerDetails })(
  BasicMap
);

// useEffect(() => {
//   if (!map.current) return; // wait for map to initialize
//   map.current.on("move", () => {
//     setLng(map.current.getCenter().lng.toFixed(4));
//     setLat(map.current.getCenter().lat.toFixed(4));
//     setZoom(map.current.getZoom().toFixed(2));
//   });
// });

// const [user, setUser] = useState({
//   name: "Syam Prajapathi",
//   number: "+91 9985180589",
//   address: "G.B. Road, Mumbai, Tamiznadu, Sri Lanka",
//   description: "so much space very large space badiya h bohot badhiya",
//   cars: 2,
//   bikes: 2,
//   rate: "free",
// });
