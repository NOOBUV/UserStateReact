import { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const AddUser = ({ onAdd, stateId, idState }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [state, setState] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!number || !name || !state) {
      alert("Please add all details asked");
      return;
    }

    onAdd([name, number, parseInt(state)]);

    setNumber("");
    setName("");
    setState("");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner bg-light">
        <Form
          // style={{ margin: "0px 5vw 0px 5vw" }}
          onSubmit={onSubmit}
          className="d-flex flex-column "
        >
          <Form.Group
            as={Row}
            className="mb-3 d-flex justify-content-between"
            controlId="formHorizontalEmail"
          >
            <Form.Label column sm={5}>
              Registration Number
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="number"
                placeholder="Enter Reg.No (123456...)"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="Name"
                placeholder="Enter Your Name (Firstname Lastname)"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                State
              </Form.Label>
              <Col sm={10}>
                <Form.Select
                  className="mb-3"
                  aria-label="Default select example"
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                >
                  <option>Click to open dropdown</option>
                  <option value={idState.Andhra_Pradesh}>Andhra Pradesh</option>
                  <option value={idState.Arunachal_Pradesh}>
                    Arunachal Pradesh
                  </option>
                  <option value={idState.Assam}>Assam</option>
                  <option value={idState.Bihar}>Bihar</option>
                  <option value={idState.Chattisgarh}>Chattisgarh</option>
                  <option value={idState.Goa}>Goa</option>
                  <option value={idState.Gujrat}>Gujrat</option>
                  <option value={idState.Haryana}>Haryana</option>
                  <option value={idState.Himachal_Pradesh}>
                    Himachal Pradesh
                  </option>
                  <option value={idState.Jharkhand}>Jharkhand</option>
                  <option value={idState.Karnataka}>Karnataka</option>
                  <option value={idState.Kerala}>Kerala</option>
                  <option value={idState.Madhya_Pradesh}>Madhya Pradesh</option>
                  <option value={idState.Maharashtra}>Maharashtra</option>
                  <option value={idState.Manipur}>Manipur</option>
                  <option value={idState.Meghalya}>Meghalya</option>
                  <option value={idState.Mizorm}>Mizorm</option>
                  <option value={idState.Nagaland}>Nagaland</option>
                  <option value={idState.Odisha}>Odisha</option>
                  <option value={idState.Punjab}>Punjab</option>
                  <option value={idState.Rajasthan}>Rajasthan</option>
                  <option value={idState.Sikkim}>Sikkim</option>
                  <option value={idState.Tamil_Nadu}>Tamil Nadu</option>
                  <option value={idState.Telangana}>Telangana</option>
                  <option value={idState.Tripura}>Tripura</option>
                  <option value={idState.Uttar_Pradesh}>Uttar Pradesh</option>
                  <option value={idState.Uttrakhand}>Uttrakhand</option>
                  <option value={idState.West_Bengal}>West Bengal</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              {/* adding style here because of a production bug */}
              <Button
                className="button"
                style={{ backgroundColor: "#0D6EFD" }}
                type="submit"
              >
                Add
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default AddUser;
