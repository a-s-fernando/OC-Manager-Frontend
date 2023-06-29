import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ReactLoading from "react-loading";
import Row from "react-bootstrap/Row";
import CharacterBrief from "../components/CharacterBrief";
import Character from "../customTypes";
import config from "../config.json";

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
          <h1 className="mt-1 mb-0">Characters</h1>
          <Row>
            {characters.map((character: Character) => (
              <CharacterBrief character={character} key={character.id} />
            ))}
          </Row>
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
