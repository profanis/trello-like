import { TaskModel } from '../../models/task.model';
import { ProjectModel } from '../../models/project.model';

const task = (_: any, args: any, ctx: any) => {
  return ctx.loaders.task.load(args.input.id)
}

const tasks = (_: any, args: any) => {
  return TaskModel.find({}).exec()
}

const newTask = (_: any, args: any) => {
  return TaskModel.create(args.input)
}

export const taskResolvers = {
  Query: {
    task,
    tasks
  },
  Mutation: {
    newTask
  },
  Task : {
    project(task: any, args: any) {
      return ProjectModel
        .findById(task.project)
        .exec()
    }
  }
};