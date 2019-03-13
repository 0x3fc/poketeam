import React, { SFC } from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { client } from "./client";

const App: SFC = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <div />
      </ApolloHooksProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
