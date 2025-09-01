import { QueryEvent, ApolloClient as ApolloClient$1, PreloadTransportedQueryFunction, InMemoryCache as InMemoryCache$1 } from '@apollo/client-react-streaming';
import { AnyRouter } from '@tanstack/react-router';
import { Observable } from 'rxjs';

interface ValueEvent {
    type: "value";
    value: unknown;
    id: string;
}
type Transported = ReadableStream<QueryEvent | ValueEvent>;
declare class ServerTransport {
    stream: Transported;
    private controller;
    private ongoingStreams;
    constructor();
    private shouldClose;
    closeOnceFinished(): void;
    dispatchRequestStarted: ({ event, observable, }: {
        event: Extract<QueryEvent, {
            type: "started";
        }>;
        observable: Observable<Exclude<QueryEvent, {
            type: "started";
        }>>;
    }) => void;
    streamValue(id: string, value: unknown): void;
}
declare class ClientTransport {
    private bufferedEvents;
    private receivedValues;
    constructor(incomingStream: Transported);
    private consume;
    set onQueryEvent(callback: (event: QueryEvent) => void);
    rerunSimulatedQueries?: () => void;
    getStreamedValue<T>(id: string): T | undefined;
    deleteStreamedValue(id: string): void;
}

/** @alpha */
interface ApolloClientRouterContext {
    apolloClient: ApolloClient$1;
    apolloClientTransport: ServerTransport | ClientTransport;
    preloadQuery: PreloadTransportedQueryFunction;
}
/** @alpha */
declare function routerWithApolloClient<TRouter extends AnyRouter>(router: TRouter["options"]["context"] extends ApolloClientRouterContext ? TRouter : never, apolloClient: ApolloClient$1): TRouter;

/**
 * A version of `ApolloClient` to be used with TanStack Start.
 *
 * For more documentation, please see {@link https://www.apollographql.com/docs/react/api/core/ApolloClient | the Apollo Client API documentation}.
 *
 * @public
 */
declare class ApolloClient extends ApolloClient$1 {
    /**
     * Information about the current package and it's export names, for use in error messages.
     *
     * @internal
     */
    static readonly info: {
        pkg: string;
        client: string;
        cache: string;
    };
}
/**
 * A version of `InMemoryCache` to be used with TanStack Start.
 *
 * For more documentation, please see {@link https://www.apollographql.com/docs/react/api/cache/InMemoryCache | the Apollo Client API documentation}.
 *
 * @public
 */
declare class InMemoryCache extends InMemoryCache$1 {
    /**
     * Information about the current package and it's export names, for use in error messages.
     *
     * @internal
     */
    static readonly info: {
        pkg: string;
        client: string;
        cache: string;
    };
}

export { ApolloClient, type ApolloClientRouterContext, InMemoryCache, routerWithApolloClient };
