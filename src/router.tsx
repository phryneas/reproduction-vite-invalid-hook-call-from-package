import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import {
  routerWithApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-tanstack-start";
import { Defer20220824Handler } from "@apollo/client/incremental";
import React from "react";

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

import { ApolloLink, setLogVerbosity } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

setLogVerbosity("debug");
loadDevMessages();
loadErrorMessages();

export function createRouter() {
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.empty(),
    incrementalHandler: new Defer20220824Handler(),
  });
  let router = createTanStackRouter({
    routeTree,
    context: {} as any,
  });

  // this fails with "Invalid hook call."
  // while the contents of `routerWithApolloClient`
  // are *literally* just `router.options.InnerWrap = ...`
  router = routerWithApolloClient(router, apolloClient);

  // commenting out the above and commenting in the below will work

  // router.options.InnerWrap = ({ children }) =>
  //   React.createElement(ApolloProvider, { client: apolloClient }, children);

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
