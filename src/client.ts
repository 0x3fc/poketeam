import ApolloBoost from "apollo-boost";

export const client = new ApolloBoost({
  uri: "https://graphql-pokemon.now.sh/"
});
