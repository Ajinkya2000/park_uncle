import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import Drawer from "rsuite/Drawer";

// Action Import
import { bookSlot, showModal } from "../../store/actions";

const DrawerWrapper = ({
  auth,
  markerDetails,
  bookSlot,
  showModal,
  ...props
}) => {
  const [loading, setLoading] = useState(false);

  const handleBooking = () => {
    setLoading(true);
    const data = {
      markerId: markerDetails._id,
      booked: true,
      clientId: auth.user._id,
    };
    bookSlot(data, markerDetails, auth.user, () => {
      props.setopen(false);
      setLoading(false);
      showModal();
    });
  };

  return (
    <Fragment>
      {markerDetails && (
        <Drawer
          backdrop={true}
          size="xs"
          placement="left"
          open={props.open}
          onClose={() => props.setopen(false)}
        >
          <Drawer.Header>
            <Drawer.Title>Parking Details</Drawer.Title>
            <Drawer.Actions>
              <button
                className={`button is-outlined ${
                  markerDetails.booked ? "is-danger" : "is-primary"
                }`}
              >
                {markerDetails.booked ? "Booked" : "Available"}
              </button>
            </Drawer.Actions>
          </Drawer.Header>
          <Drawer.Body>
            <p className="title is-2 is-spaced">{markerDetails.name}</p>
            <p className="subtitle is-4">{markerDetails.phone}</p>
            <p className="subtitle is-6">{markerDetails.address}</p>
            <p className="subtitle is-6">{markerDetails.description}</p>
            <p className="subtitle is-6">Cars: {markerDetails.numberOfCars}</p>
            <p className="subtitle is-6">
              Bikes: {markerDetails.numberOfBikes}
            </p>
            <p className="subtitle is-6">Price: {markerDetails.rate}&#8377;</p>
            {auth.user._id === markerDetails.userId ? (
              <button className={"button is-danger"}>Remove Spot</button>
            ) : (
              <button
                onClick={handleBooking}
                className={`button is-primary ${loading ? "is-loading" : ""}`}
                disabled={markerDetails.booked}
              >
                Book Spot
              </button>
            )}
          </Drawer.Body>
        </Drawer>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
    markerDetails: state.markerReducer.markerDetails,
  };
};

export default connect(mapStateToProps, { bookSlot, showModal })(DrawerWrapper);
