import Card from "react-bootstrap/Card";
import Character from "../CharacterType";
import {
  Button,
  ButtonGroup,
  Carousel,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import APIError from "../APIErrorType";
import { useEffect, useState } from "react";
import config from "../config.json";
import ReactLoading from "react-loading";

interface Props {
  character: Character;
  OnSubmitLeftCol: (e: any) => Promise<Character | APIError>;
  OnSubmitRightCol: (e: any) => Promise<Character | APIError>;
}

function EditPage({ character, OnSubmitLeftCol, OnSubmitRightCol }: Props) {
  let images = character.images;
  if (images[0] === null) {
    images = [
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    ];
  }
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
        <Card style={{ width: "100%" }} className="m-2">
          <Container>
            <Row>
              <Col className="p-0">
                <Card style={{ width: "100%" }} className="m-0">
                  <Carousel interval={null} touch={true}>
                    {images.map((source: string) => (
                      <Carousel.Item key={source}>
                        <img className="d-block w-100" src={source} />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <Card.Body>
                    <Form onSubmit={OnSubmitLeftCol}>
                      <Card.Title className="text-light">
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            name="name"
                            defaultValue={character.name}
                          />
                        </Form.Group>
                      </Card.Title>
                      <Card.Text>
                        Sources: {character.source} <br />
                        <Form.Group className="mb-3">
                          <Form.Label>DoB</Form.Label>
                          <Form.Control
                            type="text"
                            name="dob"
                            defaultValue={character.dob.split("T")[0]}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Gender</Form.Label>
                          <Form.Select name="gender">
                            <option>Select a gender</option>
                            {genders.map((gender: any) => (
                              <option
                                value={gender.id}
                                key={`gender${gender.id}`}
                              >
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
                        </Form.Group>{" "}
                        <Form.Group className="mb-3">
                          <Form.Label>Ethnicity</Form.Label>
                          <Form.Control
                            type="text"
                            name="ethnicity"
                            defaultValue={character.ethnicity}
                          />
                        </Form.Group>
                      </Card.Text>
                      <Container>
                        <ButtonGroup>
                          <Button variant="secondary" type="submit">
                            Save
                          </Button>
                          <Button variant="secondary" type="reset">
                            Reset
                          </Button>
                        </ButtonGroup>
                      </Container>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="p-0">
                <Form onSubmit={OnSubmitRightCol}>
                  <div className="mx-2">
                    <h3 className="mt-2">Personality</h3>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="personality"
                        defaultValue={character.personality}
                      />
                    </Form.Group>
                  </div>
                  <hr className="my-2" />

                  <div className="mx-2">
                    <h3>Appearance</h3>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="appearance"
                        defaultValue={character.appearance}
                      />
                    </Form.Group>{" "}
                  </div>
                  <hr className="my-2" />

                  <div className="mx-2">
                    <h3>Background</h3>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="background"
                        defaultValue={character.background}
                      />
                    </Form.Group>{" "}
                  </div>
                  <hr className="my-2" />
                  <Container>
                    <ButtonGroup>
                      <Button variant="secondary" type="submit">
                        Save
                      </Button>
                      <Button variant="secondary" type="reset">
                        Reset
                      </Button>
                    </ButtonGroup>
                  </Container>
                </Form>

                <div className="mx-2">
                  <h3>Likes</h3>
                  <p>{character.likes.join(", ")}</p>
                </div>
                <hr className="my-2" />

                <div className="mx-2">
                  <h3>Dislikes</h3>
                  <p>{character.dislikes.join(", ")}</p>
                </div>
                <hr className="my-2" />

                <div className="mx-2">
                  <h3>Relationships</h3>
                  <p>
                    {character.relationships[0] !== " : "
                      ? character.relationships.join(", ")
                      : ""}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Card>
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

export default EditPage;
