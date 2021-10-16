import React from "react";
import { connect } from "react-redux";

import Drawer from "rsuite/Drawer";
import Button from "rsuite/Button";

const DrawerWrapper = ({ markerDetails, ...props }) => {
  return (
    <>
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
              <Button
                color="green"
                appearance="primary"
                onClick={() => props.setopen(false)}
              >
                Book
              </Button>
            </Drawer.Actions>
          </Drawer.Header>
          <Drawer.Body>
            <p className="title is-2 is-spaced">{markerDetails.name}</p>
            <p className="subtitle is-4">{markerDetails.phone}</p>
            <p className="subtitle is-6">{markerDetails.address}</p>
            <p className="subtitle is-6">{markerDetails.description}</p>
            <p className="subtitle is-6">Cars: {markerDetails.numberOfCars}</p>
            <p className="subtitle is-6">Bikes: {markerDetails.numberOfBikes}</p>
            <p className="subtitle is-6">Price: {markerDetails.rate}&#8377;</p>
            <Button
              color="green"
              appearance="primary"
              onClick={() => props.setopen(false)}
            >
              Book
            </Button>
          </Drawer.Body>
        </Drawer>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    markerDetails: state.markerReducer.markerDetails,
  };
};

export default connect(mapStateToProps)(DrawerWrapper);
