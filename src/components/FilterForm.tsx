import { useState } from "react";
import { ButtonGroup, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";

interface Props {
  onSubmit: (e: any) => void;
}

function FilterForm({ onSubmit }: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Filters
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Control type="text" name="gender" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Race</Form.Label>
                <Form.Control type="text" name="race" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Source</Form.Label>
                <Form.Control type="text" name="source" />
              </Form.Group>

              <Container>
                <ButtonGroup>
                  <Button variant="secondary" type="submit">
                    Submit
                  </Button>
                  <Button variant="secondary" type="reset">
                    Reset
                  </Button>
                </ButtonGroup>
              </Container>
            </Form>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default FilterForm;
