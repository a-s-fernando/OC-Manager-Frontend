type Character = {
  id: number;
  name: string;
  dob: string;
  personality: string;
  appearance: string;
  background: string;
  gender: string | number;
  race: string | number;
  ethnicity: string;
  source: string;
  profile: string;
  relationships: string[];
  images: string[];
  dislikes: string[];
  likes: string[];
};

export default Character;
