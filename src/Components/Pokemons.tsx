import React, { SFC, useState } from "react";

export const Pokemons: SFC = () => {
  const [name, setName] = useState("");

  const searchBar = (
    <input value={name} onChange={e => setName(e.target.value)} />
  );

  return <div>{searchBar}</div>;
};
