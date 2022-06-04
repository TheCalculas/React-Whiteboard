import React from "react";

import { Form, Button, Container } from "react-bootstrap";

function CreateRoom() {
  return (
    <div>
      <Container
        className="d-flex justify-content-around align-items-center "
        style={{ height: "90vh", width: "100vw" }}
      >
        <h1 className=" d-flex align-items-center">Create Room</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Room Code</Form.Label>
            <Form.Control type="text" placeholder="Room Code" disabled />
          </Form.Group>
          <Button className="mb-3" variant="primary" type="submit">
            Generate Room Code
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default CreateRoom;
