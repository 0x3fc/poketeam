import gql from "graphql-tag";

export const POKEMON_QUERY = gql`
  query($name: String!) {
    pokemon(name: $name) {
      id
      number
      name
      image
      types
    }
  }
`;

export interface PokemonProps {
  pokemon?: {
    id: string;
    number: string;
    name: string;
    image: string;
    types: string[];
  };
}
