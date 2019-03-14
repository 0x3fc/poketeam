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
