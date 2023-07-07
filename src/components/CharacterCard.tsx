import { Card, Carousel } from "react-bootstrap";
import Character from "../CharacterType";

interface Props {
  character: Character;
}

function CharacterCard({ character }: Props) {
  let images = character.images;
  if (images[0] === null) {
    images = [
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    ];
  }
  return (
    <Card style={{ width: "100%" }} className="m-0">
      <Carousel interval={null} touch={true}>
        {images.map((source: string) => (
          <Carousel.Item key={source}>
            <img className="d-block w-100" src={source} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title className="text-light">{character.name}</Card.Title>
        <Card.Text>
          Sources: {character.source} <br />
          DoB: {character.dob.split("T")[0]} <br />
          Gender: {character.gender} <br />
          Ethnicity: {character.ethnicity} <br />
          Race: {character.race} <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
