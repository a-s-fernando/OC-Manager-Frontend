import Card from "react-bootstrap/Card";
import Character from "../customTypes";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";

interface Props {
  character: Character;
}

function CharacterFull({ character }: Props) {
  return (
    <Container>
      <Card style={{ width: "100%" }} className="m-2">
        <Container>
          <Row>
            <Col className="p-0">
              <Card style={{ width: "100%" }} className="m-0">
                <Carousel interval={null}>
                  {character.images.map((source: string) => (
                    <Carousel.Item>
                      <img className="d-block w-100" src={source} />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Body>
                  <Card.Title className="text-light">
                    {character.name}
                  </Card.Title>
                  <Card.Text>
                    Sources: {character.source} <br />
                    DoB: {character.dob.split("T")[0]} <br />
                    Gender: {character.gender} <br />
                    Ethnicity: {character.ethnicity} <br />
                    Race: {character.race} <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0">
              <div className="mx-2">
                <h3 className="mt-2">Personality</h3>
                <p>{character.personality}</p>
              </div>
              <hr className="my-2" />

              <div className="mx-2">
                <h3>Appearance</h3>
                <p>{character.appearance}</p>
              </div>
              <hr className="my-2" />

              <div className="mx-2">
                <h3>Background</h3>
                <p>{character.background}</p>
              </div>
              <hr className="my-2" />

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
                <p>{character.relationships.join(", ")}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </Container>
  );
}

export default CharacterFull;
