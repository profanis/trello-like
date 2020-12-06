import { ProjectModel } from '../../models/project.model'
import { TaskModel } from '../../models/task.model'

const project = (_: any, args: any, ctx: any) => {
  // we use loaders here instrad of ProjectModel to improve the performance
  return ctx.loaders.project.load(args.id)
}

const projects = (_: any, args: any) => {
  return ProjectModel.find({}).sort('order').exec()
}

const newProject = (_: any, args: any) => {
  return ProjectModel.create(args.input)
}

const updateProject = (_: any, args: any) => {
  console.log(args.input.id, args.input)
  return ProjectModel.findByIdAndUpdate(args.input.id, args.input)
}

const removeProject = (_: any, args: any) => {
  return ProjectModel.findByIdAndRemove(args.id).exec()
}

const updateProjectsOrder = (_: any, args: any) => {
  args.input.forEach((it: { id: string; order: number }) => {
    return ProjectModel.findByIdAndUpdate(it.id, {
      $set: { order: it.order },
    }).exec()
  })

  // const projects = ProjectModel.find({}).exec()

  // const response = ProjectModel.findByIdAndUpdate(args.input.id, {
  //   order: newOrder,
  // }).exec()

  // ProjectModel.updateMany(
  //   { order: { $gte: newOrder }, id: { $ne: args.input.id } },
  //   { $inc: { order: 1 } }
  // ).exec()

  return ProjectModel.find({}).exec()
}

export const projectResolvers = {
  Query: {
    project,
    projects,
  },
  Mutation: {
    newProject,
    updateProject,
    updateProjectsOrder,
    removeProject,
  },
  Project: {
    tasks(project: any, args: any, ctx: any) {
      return TaskModel.find({ project: project._id }).exec()
    },
  },
}
