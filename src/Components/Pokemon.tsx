import React, { SFC } from "react";
import { PokemonProps } from "../Queries/Pokemon";

export const Pokemon: SFC<PokemonProps> = props => {
  const { pokemon } = props;

  if (!pokemon) {
    return <div />;
  }

  return (
    <div>
      <div>{pokemon.number}</div>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.image} />
      {pokemon.types.map(type => (
        <div key={type}>{type}</div>
      ))}
    </div>
  );
};
