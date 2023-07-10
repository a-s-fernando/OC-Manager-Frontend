import { useNavigate } from "react-router-dom";
import CreateForm from "../components/CreateForm";
import { Alert, Container } from "react-bootstrap";
import { useState } from "react";
import Character from "../CharacterType";
import APIError from "../APIErrorType";
import config from "../config.json";

function Create() {
  const [error, setError] = useState<APIError | false>(false);
  const navigate = useNavigate();

  async function onSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    const newCharacter = {
      name: String(formJson.name.valueOf()),
      dob: String(formJson.dob.valueOf()),
      personality: String(formJson.personality.valueOf()),
      appearance: String(formJson.appearance.valueOf()),
      background: String(formJson.background.valueOf()),
      genderID: Number(formJson.gender.valueOf()),
      raceID: Number(formJson.race.valueOf()),
      ethnicity: String(formJson.ethnicity.valueOf()),
    };

    const stringified = JSON.stringify(newCharacter);

    const requestOptions = {
      method: "POST",
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
    const response: Character = data;
    navigate(`/view/${data.id}`);
    return response;
  }

  return (
    <>
      {error ? (
        <Alert key="errorAlert" variant="danger">
          {error.message}
        </Alert>
      ) : (
        <></>
      )}
      <Container>
        <h1>Create</h1>
        <CreateForm onSubmit={onSubmit} />
      </Container>
    </>
  );
}

export default Create;
