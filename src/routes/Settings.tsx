import { Alert, Container } from "react-bootstrap";
import SettingsCreate from "../components/SettingsCreate";
import config from "../config.json";
import APIError from "../APIErrorType";
import { useState } from "react";

function Settings() {
  const [error, setError] = useState<APIError | false>(false);
  const [success, setSuccess] = useState(false);

  async function onGenderSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    const newGender = { name: String(formJson.gender.valueOf()) };
    const stringified = JSON.stringify(newGender);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: stringified,
    };
    const res = await fetch(`${config.host}/gender`, requestOptions);
    const data = await res.json();
    if ("error" in data) {
      const response: APIError = { error: true, message: data.message };
      setError(response);
      return response;
    }
    setError(false);
    setSuccess(true);
    const response: object = data;
    return response;
  }

  async function onRaceSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    const newRace = { name: String(formJson.race.valueOf()) };
    const stringified = JSON.stringify(newRace);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: stringified,
    };
    const res = await fetch(`${config.host}/race`, requestOptions);
    const data = await res.json();
    if ("error" in data) {
      const response: APIError = { error: true, message: data.message };
      setError(response);
      return response;
    }
    setError(false);
    setSuccess(true);
    const response: object = data;
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
      {success ? (
        <Alert key="successAlert" variant="success">
          Creation successful!
        </Alert>
      ) : (
        <></>
      )}
      <Container>
        <h2>Create new</h2>
        <SettingsCreate
          onGenderSubmit={onGenderSubmit}
          onRaceSubmit={onRaceSubmit}
        />
        <h2>Delete existing</h2>
        <p>WIP</p>
      </Container>
    </>
  );
}

export default Settings;
