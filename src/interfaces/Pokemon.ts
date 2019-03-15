export interface Pokemon {
  id: string;
  number: string;
  name: string;
  image: string;
  types: string[];
}

export interface PokemonProps {
  pokemon?: Pokemon;
  actions?: JSX.Element[];
}

export interface TeamProps {
  team: Pokemon[];
}

export interface TypesProps {
  types: string[];
}
