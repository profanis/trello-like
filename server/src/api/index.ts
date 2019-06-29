import { gql, ApolloServer } from 'apollo-server-express'
import * as fromTasks from './task'
import * as fromProjects from './project'
// tslint:disable-next-line:import-name
import _merge = require('lodash/merge')
import { loaders } from './loaders'

const rootTypeDefs = `
  
  type Query 

  type Mutation

`

// TypeDefs
export const typeDefs = gql([
  rootTypeDefs,
  fromProjects.typeDefs,
  fromTasks.typeDefs,
].join(' '))


// Resolvers
export const resolvers = _merge(
  fromTasks.taskResolvers,
  fromProjects.projectResolvers,
)

export const context = {
  loaders: loaders as any
}


export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  uploads: false,
  engine: {
    apiKey: "service:profanis-1118:v_vyP3yrwpONJprkV4OESA"
  }
})