import React, { FC } from "react";
import { TeamProps } from "../interfaces/Pokemon";
import { Pokemon } from "./Pokemon";

export const Team: FC<TeamProps> = props => {
  return (
    <div>
      {props.team.map(pokemon => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
