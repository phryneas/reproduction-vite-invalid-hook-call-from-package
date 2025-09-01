import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

function routerWithApolloClient(router, client) {
  router.options.InnerWrap = ({ children }) =>
    React.createElement(ApolloProvider, { client }, children);
  return router;
}

export { ApolloClient, InMemoryCache, routerWithApolloClient };
