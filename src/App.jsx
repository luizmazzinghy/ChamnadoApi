import { useState } from "react";
import React from "react";

import getPosts from "./function/getPost";
const App = () => {
  const [posts, setPosts] = useState([]);

  const carregando = async (e) => {
    e.preventDefault();
    const result = await getPosts();
    setPosts(result);
  };
  console.log(posts);

  console.log();
  return (
    <div className="home">
      <h1>Ultimo Posts</h1>
      <div>{JSON.stringify(posts)}</div>
      <button onClick={carregando}>Carregar</button>
    </div>
  );
};

export default App;
