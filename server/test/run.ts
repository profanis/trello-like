import { typeDefs, resolvers, context } from '../src/api'
import { makeExecutableSchema } from 'graphql-tools'
import { graphql } from 'graphql' 

export const runQuery = (query: any, variables = {}, ctx = {}) => {
  const schema = makeExecutableSchema({ typeDefs, resolvers })
  return graphql(schema, query, null, { ...context, ...ctx }, variables)
}