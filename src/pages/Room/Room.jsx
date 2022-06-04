import React, { useState, useRef } from "react";
import {
  ButtonGroup,
  Container,
  ToggleButton,
  Form,
  Button,
} from "react-bootstrap";
import WhiteBoard from "../../components/WhiteBoard/WhiteBoard";
function Room() {
  const [tool, setTool] = useState("pencil");
  const [checked, setChecked] = useState(false);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Pencil", value: "1" },
    { name: "Line", value: "2" },
    { name: "Rectangle", value: "3" },
  ];
  return (
    <Container>
      <ButtonGroup className="mb-2 d-flex justify-content-between p-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="primary"
            name="radio"
            className="ml-1"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
        <Form.Control
          type="color"
          id="exampleColorInput"
          defaultValue="#563d7c"
          title="Choose your color"
        />
        <Button variant="success">Undo</Button>
        <Button variant="danger">Clear Canvas</Button>
      </ButtonGroup>
      <div className="col-md-9 mx-auto mt-3">
        <WhiteBoard canvasRef={canvasRef} ctxRef={ctxRef} />
      </div>
      <span className="text-primary">[Online Users: 0]</span>
    </Container>
  );
}

export default Room;
