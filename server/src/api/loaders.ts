import { TaskModel, ITask } from './../models/task.model';
import * as DataLoader  from 'dataloader'
import { ProjectModel, IProject } from '../models/project.model'
import * as _ from 'lodash'


const createProjectLoader = () => {
  return new DataLoader<string, IProject[]>((projectIds: any) => {
    return ProjectModel.find({ _id: { $in: projectIds } })
      .exec()
      .then((projects) => {
        console.log('projects loader batch: ', projectIds.length)
        const projectsById = _.keyBy(projects, '_id')
        return projectIds.map((projectId: any) => projectsById[projectId])
      })
  })
}


const createTaskLoader = () => {
  return new DataLoader<string, ITask[]>((taskIds: any) => {
    return TaskModel.find({ _id: { $in: taskIds } })
      .exec()
      .then((tasks) => {
        console.log('tasks loader batch: ', taskIds.length)
        const taskById = _.keyBy(tasks, '_id')
        return taskIds.map((projectId: any) => taskById[projectId])
      })
  })
}

const createProjectByTaskLoader = () => {
  return new DataLoader<string, ITask[]>((projectIds: any) => {
    return TaskModel.find({ project: { $in: projectIds } })
      .lean()
      .exec()
      .then((tasks) => {
        console.log('tasks loader batch: ', projectIds.length)
        const taskById = _.groupBy(tasks, (task: any) => task.project.toString())
        return projectIds.map((projectId: any) => taskById[projectId])
      })
  })
}

export const loaders  = {
  project: createProjectLoader(),
  task: createTaskLoader(),
  projectByTask: createProjectByTaskLoader()
};