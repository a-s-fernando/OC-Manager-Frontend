import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ReactLoading from "react-loading";
import Row from "react-bootstrap/Row";
import CharacterBrief from "../components/CharacterBrief";
import Character from "../customTypes";
import config from "../config.json";
import FilterForm from "../components/FilterForm";

function ViewAll() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  // Setup filters
  const [name, setName] = useState<File | string>("");
  const [gender, setGender] = useState<File | string>("");
  const [source, setSource] = useState<File | string>("");
  const [race, setRace] = useState<File | string>("");

  useEffect(() => {
    setLoading(true);
    async function loadCharacters() {
      let url = `${config.host}/character`;
      if (name || gender || source || race) {
        url += "?";
      }
      if (name) {
        url += `name=${name}&`;
      }
      if (gender) {
        url += `gender=${gender}&`;
      }
      if (source) {
        url += `source=${source}&`;
      }
      if (race) {
        url += `race=${race}&`;
      }
      if (name || gender || source || race) {
        url = url.slice(0, -1);
      }
      const res = await fetch(url);
      const data = await res.json();
      setCharacters(data);
      setLoading(false);
    }
    loadCharacters();
  }, [name, gender, race, source]);

  function onSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    setName(formJson["name"]);
    setGender(formJson["gender"]);
    setRace(formJson["race"]);
    setSource(formJson["source"]);
  }

  function displayCharacter() {
    return (
      <>
        <Container>
          <h1 className="mt-1 mb-0">
            Characters <FilterForm onSubmit={onSubmit} />
          </h1>
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
