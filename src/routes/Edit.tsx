import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import Character from "../CharacterType";
import config from "../config.json";
import EditPage from "../components/EditPage";

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
  function onSubmit(e: any) {
    return blankCharacter;
  }

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
    return <EditPage character={character} onSubmit={onSubmit} />;
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

export default Edit;
