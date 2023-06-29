import Card from "react-bootstrap/Card";
import Character from "../customTypes";

interface Props {
  character: Character;
}

function CharacterBrief({ character }: Props) {
  return (
    <Card style={{ width: "30%" }} className="m-2">
      <a href={`/view/${character.id}`}>
        <Card.Img variant="top" src={character.profile} />
      </a>
      <Card.Body>
        <Card.Title>
          <a className="link-light" href={`/view/${character.id}`}>
            {character.name}
          </a>
        </Card.Title>
        <Card.Text>Sources: {character.source}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CharacterBrief;
