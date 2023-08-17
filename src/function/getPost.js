import api from "../data/api";

const getPosts = async () => {
  const response = await api.get("https://pokeapi.co/api/v2/pokemon");
  return response.data || [];
};

export default getPosts;
