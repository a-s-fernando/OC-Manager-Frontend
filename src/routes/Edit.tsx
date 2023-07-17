import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import Character from "../CharacterType";
import APIError from "../APIErrorType";
import config from "../config.json";
import EditPage from "../components/EditPage";
import { Alert } from "react-bootstrap";

function Edit() {
  const { id } = useParams();
  const blankCharacter: Character = {
    id: 0,
    name: "",
    dob: "",
    personality: "",
    appearance: "",
    background: "",
    gender: "",
    genderid: -1,
    race: "",
    raceid: -1,
    ethnicity: "",
    source: "",
    profile: "",
    relationships: [],
    images: [],
    dislikes: [],
    likes: [],
  };
  const [character, setCharacter] = useState(blankCharacter);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<APIError | false>(false);

  useEffect(() => {
    setLoading(true);
    async function loadCharacter() {
      const res = await fetch(`${config.host}/character/${id}`);
      const data = await res.json();
      setCharacter(data);
      setLoading(false);
    }
    loadCharacter();
  }, [id]);

  async function onSubmitLeftCol(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    const newCharacter = {
      id: String(id),
      name: String(formJson.name.valueOf()),
      dob: String(formJson.dob.valueOf()),
      genderID: Number(formJson.gender.valueOf()),
      raceID: Number(formJson.race.valueOf()),
      ethnicity: String(formJson.ethnicity.valueOf()),
      personality: String(character.personality),
      appearance: String(character.appearance),
      background: String(character.background),
    };

    const stringified = JSON.stringify(newCharacter);

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: stringified,
    };
    const res = await fetch(`${config.host}/character`, requestOptions);
    const data = await res.json();
    if ("error" in data) {
      const response: APIError = { error: true, message: data.message };
      setError(response);
      return response;
    }
    setError(false);
    window.location.reload();
    const response: Character = data;
    return response;
  }

  async function onSubmitRightCol(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    const newCharacter = {
      id: String(id),
      name: String(character.name),
      dob: String(character.dob),
      genderID: Number(character.genderid),
      raceID: Number(character.raceid),
      ethnicity: String(character.ethnicity),
      personality: String(formJson.personality.valueOf()),
      appearance: String(formJson.appearance.valueOf()),
      background: String(formJson.background.valueOf()),
    };

    const stringified = JSON.stringify(newCharacter);

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: stringified,
    };
    const res = await fetch(`${config.host}/character`, requestOptions);
    const data = await res.json();
    if ("error" in data) {
      const response: APIError = { error: true, message: data.message };
      setError(response);
      return response;
    }
    setError(false);
    window.location.reload();
    const response: Character = data;
    return response;
  }

  function viewCharacter() {
    return (
      <EditPage
        character={character}
        OnSubmitLeftCol={onSubmitLeftCol}
        OnSubmitRightCol={onSubmitRightCol}
      />
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
    <>
      {error ? (
        <Alert key="errorAlert" variant="danger">
          {error.message}
        </Alert>
      ) : (
        <></>
      )}
      {viewCharacter()}
    </>
  );
}

export default Edit;
