import { ButtonGroup, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import APIError from "../APIErrorType";

interface Props {
  onGenderSubmit: (e: any) => Promise<object | APIError>;
  onRaceSubmit: (e: any) => Promise<object | APIError>;
}

function SettingsCreate({ onGenderSubmit, onRaceSubmit }: Props) {
  return (
    <Container>
      <Form onSubmit={onGenderSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>New Gender</Form.Label>
          <Form.Control type="text" name="gender" />
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

      <Form onSubmit={onRaceSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>New Race</Form.Label>
          <Form.Control type="text" name="race" />
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
  );
}

export default SettingsCreate;
