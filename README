Reproduction for an "Invalid Hook Call" error when using TanStack Router with Apollo Client in a Vite + React project.

To reproduce:

- Clone the repository.
- Run `pnpm install` to install dependencies.
- Run `pnpm dev` to start the development server.
- Open the application in a web browser.

Observed Behavior:

```sh
% pnpm dev                                                                                                                                                                                                                    main

> @integration-test/tanstack-start@0.0.0 dev /private/tmp/tanstack-start
> vite dev

Generated route tree in 39ms

  VITE v7.1.3  ready in 850 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
[vite] connected.
Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.
Error in renderToPipeableStream: TypeError: Cannot read properties of null (reading 'useContext')
    at Object.process.env.NODE_ENV.exports.useContext (/private/tmp/tanstack-start/node_modules/.vite/deps_ssr/chunk-YD63F7SJ.js:1327:27)
    at ApolloProvider (/private/tmp/tanstack-start/node_modules/.vite/deps_ssr/chunk-SIJXX5QJ.js:48:32)
    at Object.react_stack_bottom_frame (/private/tmp/tanstack-start/node_modules/.pnpm/react-dom@19.1.1_react@19.1.1/node_modules/react-dom/cjs/react-dom-server.node.development.js:9176:18)
    at renderWithHooks (/private/tmp/tanstack-start/node_modules/.pnpm/react-dom@19.1.1_react@19.1.1/node_modules/react-dom/cjs/react-dom-server.node.development.js:4797:19)
    at renderElement (/private/tmp/tanstack-start/node_modules/.pnpm/react-dom@19.1.1_react@19.1.1/node_modules/react-dom/cjs/react-dom-server.node.development.js:5232:23)
    at retryNode (/private/tmp/tanstack-start/node_modules/.pnpm/react-dom@19.1.1_react@19.1.1/node_modules/react-dom/cjs/react-dom-server.node.development.js:5991:31)
    at renderNodeDestructive (/private/tmp/tanstack-start/node_modules/.pnpm/react-dom@19.1.1_react@19.1.1/node_modules/react-dom/cjs/react-dom-server.node.development.js:5941:11)
    at finishFunctionComponent (/private/tmp/tanstack-start/node_modules/.pnpm/react-dom@19.1.1_react@19.1.1/node_modules/react-dom/cjs/react-dom-server.node.development.js:4841:13)
    at renderElement (/private/tmp/tanstack-start/node_modules/.pnpm/react-dom@19.1.1_react@19.1.1/node_modules/react-dom/cjs/react-dom-server.node.development.js:5283:11)
    at retryNode (/private/tmp/tanstack-start/node_modules/.pnpm/react-dom@19.1.1_react@19.1.1/node_modules/react-dom/cjs/react-dom-server.node.development.js:5991:31) { componentStack: [Getter] }
```

## Core issue:

See [src/router.tsx](src/router.tsx) for the core issue. The error occurs when calling `routerWithApolloClient(router, apolloClient);`, which sets `router.options.InnerWrap` to a component that uses the `useContext` hook.

If instead of using the external `@apollo/client-integration-tanstack-start` package, we manually set `router.options.InnerWrap` to literally the same code, it works without error.

Source code for the `@apollo/client-integration-tanstack-start` package can be found here:

[index.js](.yalc/@apollo/client-integration-tanstack-start/dist/index.js)
[package.json](.yalc/@apollo/client-integration-tanstack-start/package.json)
