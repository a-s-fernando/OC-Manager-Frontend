import { ButtonGroup, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import APIError from "../APIErrorType";
import config from "../config.json";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Character from "../CharacterType";

interface Props {
  onSubmit: (e: any) => Promise<Character | APIError>;
}

function CreateForm({ onSubmit }: Props) {
  const [loadingGenders, setLoadingGenders] = useState(false);
  const [loadingRaces, setLoadingRaces] = useState(false);

  const [genders, setGenders] = useState<Array<object>>([]);
  const [races, setRaces] = useState<Array<object>>([]);

  useEffect(() => {
    setLoadingGenders(true);
    setLoadingRaces(true);
    async function loadGenders() {
      const res = await fetch(`${config.host}/gender`);
      const data = await res.json();
      setGenders(data);
      setLoadingGenders(false);
    }
    async function loadRaces() {
      const res = await fetch(`${config.host}/race`);
      const data = await res.json();
      setRaces(data);
      setLoadingRaces(false);
    }

    loadGenders();
    loadRaces();
  }, []);

  function renderForm() {
    return (
      <Container>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>DoB (MM/DD/YYYY)</Form.Label>
            <Form.Control type="text" name="dob" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Personality</Form.Label>
            <Form.Control type="text" name="personality" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Appearance</Form.Label>
            <Form.Control type="text" name="appearance" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Background</Form.Label>
            <Form.Control type="text" name="background" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Select name="gender">
              <option>Select a gender</option>
              {genders.map((gender: any) => (
                <option value={gender.id} key={`gender${gender.id}`}>
                  {gender.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Race</Form.Label>
            <Form.Select name="race">
              <option>Select a race</option>
              {races.map((race: any) => (
                <option value={race.id} key={`race${race.id}`}>
                  {race.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ethnicity</Form.Label>
            <Form.Control type="text" name="ethnicity" />
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

  return loadingGenders && loadingRaces ? (
    <ReactLoading
      className="mx-auto p-5"
      type="bars"
      color="#2B3035"
      height="50%"
      width="50%"
    />
  ) : (
    renderForm()
  );
}

export default CreateForm;
