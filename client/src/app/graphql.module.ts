import { NgModule } from '@angular/core'
import { InMemoryCache } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'

const uri = 'http://localhost:3001/graphql' // <-- add the URL of the GraphQL server here

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})

export function createApollo(httpLink: HttpLink) {
  return {
    link: onErrorLink.concat(httpLink.create({ uri })),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
      },
    },
  }
}

@NgModule({
  exports: [],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
