import React, { FC } from "react";
import { TeamProps, Pokemon } from "../interfaces/Pokemon";
import { List, Avatar } from "antd";
import { Types } from "./Types";

export const Team: FC<TeamProps> = props => {
  const renderItem = (pokemon: Pokemon) => (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar shape="square" size="large" src={pokemon.image} />}
        title={pokemon.name}
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
