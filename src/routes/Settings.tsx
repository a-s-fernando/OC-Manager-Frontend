import { Container } from "react-bootstrap";
import SettingsCreate from "../components/SettingsCreate";

function Settings() {
  async function onGenderSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    const newGender = String(formJson.gender.valueOf());
    console.log(newGender);
    return {};
  }

  async function onRaceSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    const newRace = String(formJson.race.valueOf());
    console.log(newRace);
    return {};
  }

  return (
    <Container>
      <h2>Create new</h2>
      <SettingsCreate
        onGenderSubmit={onGenderSubmit}
        onRaceSubmit={onRaceSubmit}
      />
      <h2>Delete existing</h2>
      <p>WIP</p>
    </Container>
  );
}

export default Settings;
