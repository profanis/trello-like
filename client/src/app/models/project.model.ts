import { Task } from './task.model'

export interface Project {
  id?: string
  name?: string
  description?: string
  order?: number
  tasks?: Task[]
}

export interface NewProjectResponse {
  newProject: Project
}

export interface NewTaskResponse {
  newTask: Task
}

export interface ProjectResponse {
  project: Project
}

export interface ProjectsResponse {
  projects: Project[]
}

export interface NewProjectInputVariables {
  input: Project
}

export interface UpdateProjectSortingInput {
  input: {
    id: string
    order: number
  }
}
