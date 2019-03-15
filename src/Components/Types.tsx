import React, { FC } from "react";
import { TypesProps } from "../interfaces/Pokemon";
import { Tag } from "antd";

const TYPE_COLOR: { [key: string]: string } = {
  Bug: "rgb(114, 159, 63)",
  Dark: "rgb(112, 112, 112)",
  Dragon: "rgb(241, 110, 87)",
  Electric: "rgb(238, 213, 53)",
  Fairy: "rgb(253, 185, 233)",
  Fighting: "rgb(213, 103, 35)",
  Fire: "rgb(253, 125, 36)",
  Flying: "rgb(61, 199, 239)",
  Ghost: "rgb(123, 97, 162)",
  Grass: "rgb(155, 204, 80)",
  Ground: "rgb(171, 152, 66)",
  Ice: "rgb(81, 196, 231)",
  Normal: "rgb(164, 172, 175)",
  Poison: "rgb(185, 127, 201)",
  Psychic: "rgb(185, 127, 201)",
  Rock: "rgb(163, 140, 33)",
  Steel: "rgb(158, 182, 184)",
  Water: "rgb(69, 146, 196)"
};

export const Types: FC<TypesProps> = props => {
  return (
    <div>
      {props.types.map(type => (
        <Tag color={TYPE_COLOR[type]}>{type}</Tag>
      ))}
    </div>
  );
};
