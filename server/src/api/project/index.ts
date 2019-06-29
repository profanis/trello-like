import { projectResolvers } from './project.resolvers'
import { ProjectModel } from '../../models/project.model'
import { loadGQLFile } from '../../utils/gqlLoader'

const typeDefs = loadGQLFile('project/project.gql')

export { projectResolvers, typeDefs }
