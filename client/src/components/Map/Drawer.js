import React, { Fragment } from "react";
import { connect } from "react-redux";

import Drawer from "rsuite/Drawer";

const DrawerWrapper = ({ markerDetails, ...props }) => {
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
            <button className={"button is-primary"} disabled={markerDetails.booked}>Book</button>
          </Drawer.Body>
        </Drawer>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    markerDetails: state.markerReducer.markerDetails,
  };
};

export default connect(mapStateToProps)(DrawerWrapper);
