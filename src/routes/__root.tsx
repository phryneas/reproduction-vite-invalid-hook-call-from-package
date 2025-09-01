/// <reference types="vite/client" />
import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  Outlet,
} from "@tanstack/react-router";

import { type ApolloClientRouterContext } from "@apollo/client-integration-tanstack-start";

export const Route = createRootRouteWithContext<ApolloClientRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="p-2 flex gap-2 text-lg">... nav here ...</div>
        <hr />
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
