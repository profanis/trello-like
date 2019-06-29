import { taskResolvers } from './task.resolvers'
import { TaskModel } from '../../models/task.model'
import { loadGQLFile } from '../../utils/gqlLoader'

const typeDefs = loadGQLFile('task/task.gql')

export { taskResolvers, typeDefs }
