import { Task } from './task.model'

export interface Project {
  id?: string
  name?: string
  description?: string
  order?: number
  tasks?: Task[]
}
export interface ProjectResponse {
  project: Project
}
export interface ProjectsResponse {
  projects: Project[]
}
export interface UpdateProjectOrderInput {
  input: {
    id: string
    order: number
  }
}
