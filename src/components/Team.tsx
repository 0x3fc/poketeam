import React, { FC } from "react";
import { TeamProps, Pokemon } from "../interfaces/Pokemon";
import { List } from "antd";
import { Types } from "./Types";

export const Team: FC<TeamProps> = props => {
  const renderItem = (pokemon: Pokemon) => (
    <List.Item>
      <List.Item.Meta
        avatar={
          <img
            src={pokemon.image}
            style={{ width: "auto", height: 64, margin: "auto" }}
          />
        }
        title={<span style={{ fontSize: "1.2rem" }}>{pokemon.name}</span>}
        description={<Types types={pokemon.types} />}
      />
    </List.Item>
  );

  return (
    <List
      itemLayout="horizontal"
      dataSource={props.team}
      renderItem={renderItem}
      bordered
      size="large"
    />
  );
};
