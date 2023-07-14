import { Alert, Container } from "react-bootstrap";
import SettingsCreate from "../components/SettingsCreate";
import SettingsDelete from "../components/SettingsDelete";
import config from "../config.json";
import APIError from "../APIErrorType";
import { useState } from "react";

function Settings() {
  const [error, setError] = useState<APIError | false>(false);
  const [success, setSuccess] = useState("");

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
    setSuccess("Gender created successfully!");
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
    setSuccess("Race created successfully!");
    const response: object = data;
    return response;
  }

  async function onSourceSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    const newSource = { name: String(formJson.source.valueOf()) };
    const stringified = JSON.stringify(newSource);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: stringified,
    };
    const res = await fetch(`${config.host}/source`, requestOptions);
    const data = await res.json();
    if ("error" in data) {
      const response: APIError = { error: true, message: data.message };
      setError(response);
      return response;
    }
    setError(false);
    setSuccess("Source created successfully!");
    const response: object = data;
    return response;
  }

  async function onImageSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    const newImage = { imageURL: String(formJson.image.valueOf()) };
    const stringified = JSON.stringify(newImage);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: stringified,
    };
    const res = await fetch(`${config.host}/image`, requestOptions);
    const data = await res.json();
    if ("error" in data) {
      const response: APIError = { error: true, message: data.message };
      setError(response);
      return response;
    }
    setError(false);
    setSuccess("Image created successfully!");
    const response: object = data;
    return response;
  }

  async function onRaceDelete(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    const raceID = { id: String(formJson.race.valueOf()) };
    const stringified = JSON.stringify(raceID);

    const requestOptions = {
      method: "DELETE",
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
    setSuccess("Race deleted successfully!");
    const response: object = data;
    return response;
  }

  async function onGenderDelete(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    const genderID = { id: String(formJson.gender.valueOf()) };
    const stringified = JSON.stringify(genderID);

    const requestOptions = {
      method: "DELETE",
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
    setSuccess("Gender deleted successfully!");
    const response: object = data;
    return response;
  }

  async function onSourceDelete(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    const sourceID = { id: String(formJson.source.valueOf()) };
    const stringified = JSON.stringify(sourceID);

    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: stringified,
    };
    const res = await fetch(`${config.host}/source`, requestOptions);
    const data = await res.json();
    if ("error" in data) {
      const response: APIError = { error: true, message: data.message };
      setError(response);
      return response;
    }
    setError(false);
    setSuccess("Source deleted successfully!");
    const response: object = data;
    return response;
  }

  async function onImageDelete(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    const imageID = { id: String(formJson.image.valueOf()) };
    const stringified = JSON.stringify(imageID);

    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: stringified,
    };
    const res = await fetch(`${config.host}/image`, requestOptions);
    const data = await res.json();
    if ("error" in data) {
      const response: APIError = { error: true, message: data.message };
      setError(response);
      return response;
    }
    setError(false);
    setSuccess("Image deleted successfully!");
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
          {success}
        </Alert>
      ) : (
        <></>
      )}
      <Container>
        <h2>Create new</h2>
        <SettingsCreate
          onGenderSubmit={onGenderSubmit}
          onRaceSubmit={onRaceSubmit}
          onSourceSubmit={onSourceSubmit}
          onImageSubmit={onImageSubmit}
        />
        <h2>Delete existing</h2>
        <p>
          <i>WARNING: Will delete every character with the associated tags.</i>
        </p>
        <SettingsDelete
          onGenderSubmit={onGenderDelete}
          onRaceSubmit={onRaceDelete}
          onSourceSubmit={onSourceDelete}
          onImageSubmit={onImageDelete}
        />
      </Container>
    </>
  );
}

export default Settings;
