import React, { SFC, useState } from "react";
import { useQuery } from "react-apollo-hooks";
import { POKEMON_QUERY } from "../Queries/Pokemon";
import { Pokemon } from "./Pokemon";

export const Pokemons: SFC = () => {
  const [name, setName] = useState("");
  const { data, loading } = useQuery(POKEMON_QUERY, {
    variables: { name }
  });

  const searchBar = (
    <input value={name} onChange={e => setName(e.target.value)} />
  );

  const display = (
    <div>
      {loading ? <span>Searching...</span> : <Pokemon pokemon={data.pokemon} />}
    </div>
  );

  return (
    <div>
      {searchBar}
      {display}
    </div>
  );
};
