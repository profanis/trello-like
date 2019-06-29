import { ProjectModel } from '../../models/project.model'
import { TaskModel } from '../../models/task.model'
import { ProjectService } from '../../services/project.service'

const project = (_: any, args: any, ctx: any) => {
  // we use loaders here instrad of ProjectModel to improve the performance
  return ctx.loaders.project.load(args.id)
}

const projects = (_: any, args: any) => {
  return ProjectModel.find({})
    .sort('order')
    .exec()
}

const newProject = (_: any, args: any) => {
  return ProjectModel.create(args.input)
}

const updateProject = (_: any, args: any) => {
  return ProjectModel.findByIdAndUpdate(args.input.id, args.input)
}

const removeProject = (_: any, args: any) => {
  return ProjectModel.findByIdAndRemove(args.id).exec()
}

const updateProjectSorting = (_: any, args: any) => {
  const { id, order } = args.input
  return  ProjectModel.findByIdAndUpdate(id, { order }, { new: true }).exec()
}

export const projectResolvers = {
  Query: {
    project,
    projects,
  },
  Mutation: {
    newProject,
    updateProject,
    removeProject,
    updateProjectSorting,
  },
  Project: {
    tasks(project: any, args: any, ctx: any) {
      return TaskModel.find({ project: project._id }).exec()
    },
  },
}
