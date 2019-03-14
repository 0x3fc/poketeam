import React, { FC, useState } from "react";
import { useQuery } from "react-apollo-hooks";
import { POKEMON_QUERY } from "../queries/Pokemon";
import { Pokemon } from "./Pokemon";
import { Pokemon as IPokemon } from "../interfaces/Pokemon";
import { Team } from "./Team";

export const Pokemons: FC = () => {
  const [name, setName] = useState("");
  const [team, setTeam] = useState([] as IPokemon[]);

  const { data, loading } = useQuery(POKEMON_QUERY, {
    variables: { name }
  });

  const searchBar = (
    <input value={name} onChange={e => setName(e.target.value)} />
  );

  const pokemon = (
    <div>
      <Pokemon pokemon={data.pokemon} />
      {data.pokemon ? (
        <button
          onClick={() => {
            setTeam([...team, data.pokemon]);
            setName("");
          }}
        >
          Select
        </button>
      ) : (
        <></>
      )}
    </div>
  );

  const display = (
    <div>{loading ? <span>Searching...</span> : <div>{pokemon}</div>}</div>
  );

  return (
    <div>
      {searchBar}
      {display}
      <Team team={team} />
    </div>
  );
};
