import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import ReactLoading from "react-loading";
import Row from "react-bootstrap/Row";
import config from "../config.json";

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

function ViewAll() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function loadCharacters() {
      const res = await fetch(`${config.host}/character`);
      const data = await res.json();
      setCharacters(data);
      setLoading(false);
    }
    loadCharacters();
  }, []);

  function displayCharacter() {
    return (
      <>
        <Container>
          <h1>Characters</h1>
          <ListGroup>
            {characters.map((character: Character) => (
              <ListGroup.Item key={character.id}>
                {character.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      </>
    );
  }
  return loading ? (
    <ReactLoading
      className="mx-auto p-5"
      type="bars"
      color="#2B3035"
      height="50%"
      width="50%"
    />
  ) : (
    displayCharacter()
  );
}

export default ViewAll;
