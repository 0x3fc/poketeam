import React, { FC } from "react";
import { PokemonProps } from "../interfaces/Pokemon";
import { Card, Empty } from "antd";
import { Types } from "./Types";

export const Pokemon: FC<PokemonProps> = props => {
  const { pokemon } = props;

  if (!pokemon) {
    return <Empty description="No matching pokemon :(" />;
  }

  return (
    <Card
      cover={
        <img
          src={pokemon.image}
          style={{
            padding: "50px",
            height: 300,
            width: "auto",
            margin: "auto"
          }}
        />
      }
      actions={props.actions}
    >
      <strong>#{pokemon.number}</strong>
      <h3>{pokemon.name}</h3>
      <Types types={pokemon.types} />
    </Card>
  );
};
