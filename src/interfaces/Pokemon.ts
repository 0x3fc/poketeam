export interface Pokemon {
  id: string;
  number: string;
  name: string;
  image: string;
  types: string[];
}

export interface PokemonProps {
  pokemon?: Pokemon;
}

export interface TeamProps {
  team: Pokemon[];
}
