import React, { FC } from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";

import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { client } from "./client";
import { Pokemons } from "./components/Pokemons";
import { Layout } from "antd";

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Layout
          style={{
            maxWidth: "500px",
            margin: "20px auto",
            backgroundColor: "transparent"
          }}
        >
          <Pokemons />
        </Layout>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
