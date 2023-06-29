import Card from "react-bootstrap/Card";

type Character = {
  id: number;
  name: string;
  dob: string;
  personality: string;
  appearance: string;
  background: string;
  gender: string;
  race: string;
  ethnicity: string;
  source: string;
  profile: string;
  relationships: string[];
  images: string[];
  dislikes: string[];
  likes: string[];
};

interface Props {
  character: Character;
}

function CharacterBrief({ character }: Props) {
  return (
    <Card style={{ width: "30%" }} className="mx-2 my-2">
      <Card.Img variant="top" src={character.profile} />
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
