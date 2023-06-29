import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import Character from "../customTypes";
import config from "../config.json";

function ViewOne() {
  const { id } = useParams();
  const blankCharacter: Character = {
    id: 0,
    name: "",
    dob: "",
    personality: "",
    appearance: "",
    background: "",
    gender: "",
    race: "",
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

  function viewCharacter() {
    return (
      <div>
        <h3>Character: {character.name}</h3>
      </div>
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
    viewCharacter()
  );
}

export default ViewOne;
