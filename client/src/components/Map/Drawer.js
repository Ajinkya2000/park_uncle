import React from "react";
import Drawer from "rsuite/Drawer";
import Button from "rsuite/Button";

const DrawerWrapper = (props) => {
  return (
    <>
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
          <p className="title is-2 is-spaced">{props.user.name}</p>
          <p className="subtitle is-4">{props.user.number}</p>
          <p className="subtitle is-6">{props.user.address}</p>
          <p className="subtitle is-6">{props.user.description}</p>
          <p className="subtitle is-6">Cars: {props.user.cars}</p>
          <p className="subtitle is-6">Bikes: {props.user.bikes}</p>
          <p className="subtitle is-6">Price: {props.user.rate}&#8377;</p>
          <Button
            color="green"
            appearance="primary"
            onClick={() => props.setopen(false)}
          >
            Book
          </Button>
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default DrawerWrapper;
