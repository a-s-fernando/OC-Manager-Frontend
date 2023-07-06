import Card from "react-bootstrap/Card";
import Character from "../CharacterType";

interface Props {
  character: Character;
}

function CharacterBrief({ character }: Props) {
  return (
    <Card style={{ width: "30%" }} className="m-2">
      <a href={`/view/${character.id}`}>
        <Card.Img
          variant="top"
          src={
            character.profile
              ? character.profile
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
        />
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
