import React, { FC, useState } from "react";
import { useQuery } from "react-apollo-hooks";
import { POKEMON_QUERY } from "../queries/Pokemon";
import { Pokemon } from "./Pokemon";
import { Pokemon as IPokemon } from "../interfaces/Pokemon";
import { Team } from "./Team";
import { Input, Card, Divider, Icon } from "antd";

export const Pokemons: FC = () => {
  const [name, setName] = useState("");
  const [team, setTeam] = useState([] as IPokemon[]);

  const { data, loading } = useQuery(POKEMON_QUERY, {
    variables: { name }
  });

  const searchBar = (
    <Input.Search
      placeholder="Search a pokemon"
      value={name}
      onChange={e => setName(e.target.value)}
      onSearch={value => setName(value)}
      suffix={loading && name ? <Icon type="loading" spin /> : <></>}
      style={{ marginBottom: "10px" }}
    />
  );

  const addToTeam = (
    <>
      <Icon
        type="usergroup-add"
        onClick={() => {
          setTeam([...team, data.pokemon]);
          setName("");
        }}
      />
    </>
  );

  return (
    <div>
      <Card>
        {searchBar}
        <Pokemon pokemon={data.pokemon} actions={[addToTeam]} />
      </Card>
      <Divider>Team</Divider>
      <Team team={team} />
    </div>
  );
};
