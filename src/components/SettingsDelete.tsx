import { ButtonGroup, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import APIError from "../APIErrorType";
import { useEffect, useState } from "react";
import config from "../config.json";
import ReactLoading from "react-loading";

interface Props {
  onGenderSubmit: (e: any) => Promise<object | APIError>;
  onRaceSubmit: (e: any) => Promise<object | APIError>;
  onSourceSubmit: (e: any) => Promise<object | APIError>;
  onImageSubmit: (e: any) => Promise<object | APIError>;
}

function SettingsDelete({
  onGenderSubmit,
  onRaceSubmit,
  onSourceSubmit,
  onImageSubmit,
}: Props) {
  const [loadingGenders, setLoadingGenders] = useState(false);
  const [loadingRaces, setLoadingRaces] = useState(false);
  const [loadingSources, setLoadingSources] = useState(false);
  const [loadingImages, setLoadingImages] = useState(false);

  const [genders, setGenders] = useState<Array<object>>([]);
  const [races, setRaces] = useState<Array<object>>([]);
  const [sources, setSources] = useState<Array<object>>([]);
  const [images, setImages] = useState<Array<object>>([]);

  useEffect(() => {
    setLoadingGenders(true);
    setLoadingRaces(true);
    async function loadGenders() {
      const res = await fetch(`${config.host}/gender`);
      const data = await res.json();
      setGenders(data);
      setLoadingGenders(false);
    }
    async function loadRaces() {
      const res = await fetch(`${config.host}/race`);
      const data = await res.json();
      setRaces(data);
      setLoadingRaces(false);
    }
    async function loadSources() {
      const res = await fetch(`${config.host}/source`);
      const data = await res.json();
      setSources(data);
      setLoadingSources(false);
    }
    async function loadImages() {
      const res = await fetch(`${config.host}/image`);
      const data = await res.json();
      setImages(data);
      setLoadingImages(false);
    }

    loadGenders();
    loadRaces();
    loadSources();
    loadImages();
  }, []);
  function renderDelete() {
    return (
      <Container>
        <Form onSubmit={onGenderSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Select name="gender">
              <option>Select a gender</option>
              {genders.map((gender: any) => (
                <option value={gender.id} key={`gender${gender.id}`}>
                  {gender.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Container>
            <ButtonGroup>
              <Button variant="secondary" type="submit">
                Delete
              </Button>
            </ButtonGroup>
          </Container>
        </Form>

        <Form onSubmit={onRaceSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Race</Form.Label>
            <Form.Select name="race">
              <option>Select a race</option>
              {races.map((race: any) => (
                <option value={race.id} key={`race${race.id}`}>
                  {race.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Container>
            <ButtonGroup>
              <Button variant="secondary" type="submit">
                Delete
              </Button>
            </ButtonGroup>
          </Container>
        </Form>

        <Form onSubmit={onSourceSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Source</Form.Label>
            <Form.Select name="source">
              <option>Select a source</option>
              {sources.map((source: any) => (
                <option value={source.id} key={`source${source.id}`}>
                  {source.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Container>
            <ButtonGroup>
              <Button variant="secondary" type="submit">
                Delete
              </Button>
            </ButtonGroup>
          </Container>
        </Form>

        <Form onSubmit={onImageSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Select name="image">
              <option>Select an image</option>
              {images.map((image: any) => (
                <option value={image.id} key={`image${image.id}`}>
                  {image.url}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Container>
            <ButtonGroup>
              <Button variant="secondary" type="submit">
                Delete
              </Button>
            </ButtonGroup>
          </Container>
        </Form>
      </Container>
    );
  }

  return loadingGenders && loadingRaces ? (
    <ReactLoading
      className="mx-auto p-5"
      type="bars"
      color="#2B3035"
      height="50%"
      width="50%"
    />
  ) : (
    renderDelete()
  );
}

export default SettingsDelete;
