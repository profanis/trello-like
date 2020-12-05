import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'
import { Project, ProjectsResponse } from 'src/app/models/project.model'
import { ChangeProjectOrderGQL } from './graphql/mutations/change-project-order.mutation'
import { NewProjectGQL } from './graphql/mutations/new-project.mutation'
import { NewTaskGQL } from './graphql/mutations/new-task.mutation'
import { RemoveProjectGQL } from './graphql/mutations/remove-project.mutation'
import { ProjectsGQL } from './graphql/queries/projects.query'

@Injectable()
export class ProjectListService {
  constructor(
    private newProjectGQL: NewProjectGQL,
    private projectsGQL: ProjectsGQL,
    private removeProjectGQL: RemoveProjectGQL,
    private changeProjectOrderGQL: ChangeProjectOrderGQL,
    private newTaskGQL: NewTaskGQL
  ) {}

  addProject(project: Project) {
    return this.newProjectGQL.mutate(
      { input: project },
      {
        update: (store, { data: { newProject } }) => {
          // Get the slice of the cache
          const state: ProjectsResponse = store.readQuery({
            query: this.projectsGQL.document,
          })

          const updatedState = {
            ...state,
            projects: [
              ...state.projects,
              { ...newProject, order: 0, tasks: [] },
            ],
          }

          // Update cache
          store.writeQuery({
            query: this.projectsGQL.document,
            data: updatedState,
          })
        },
      }
    )
  }

  removeProject(projectId) {
    return this.removeProjectGQL.mutate(
      { id: projectId },
      {
        update: (store, { data: { removeProject } }) => {
          // Get the slice of the cache
          const state: ProjectsResponse = store.readQuery({
            query: this.projectsGQL.document,
          })

          // Remove item from array
          const projectIndex = state.projects.findIndex(
            (project) => project.id === removeProject.id
          )

          const updatedState = {
            ...state,
            projects: [
              ...state.projects.slice(0, projectIndex),
              ...state.projects.slice(projectIndex + 1),
            ],
          }

          // Update cache
          store.writeQuery({
            query: this.projectsGQL.document,
            data: updatedState,
          })
        },
      }
    )
  }

  addTaskInProject(task, project) {
    return this.newTaskGQL.mutate(
      {
        input: {
          name: task,
          project: project.id,
        },
      },
      {
        update: (store, { data: { newTask } }) => {
          // Get the slice of the cache
          const state: ProjectsResponse = store.readQuery({
            query: this.projectsGQL.document,
          })

          // Add task in project
          const foundProjectIndex = state.projects.findIndex(
            (it) => it.id === project.id
          )

          const foundProject = { ...state.projects[foundProjectIndex] }

          const newItem = {
            ...state.projects[foundProjectIndex],
            tasks: [...foundProject.tasks, newTask],
          }

          const updatedState = {
            ...state,
            projects: [
              ...state.projects.slice(0, foundProjectIndex),
              newItem,
              ...state.projects.slice(foundProjectIndex + 1),
            ],
          }

          // Update cache
          store.writeQuery({
            query: this.projectsGQL.document,
            data: updatedState,
          })
        },
      }
    )
  }

  getProjects() {
    return this.projectsGQL
      .watch()
      .valueChanges.pipe(map((results) => results.data))
  }

  updateProjectSorting(projectId: string, order: number) {
    return this.changeProjectOrderGQL.mutate(
      {
        input: { id: projectId, order },
      },
      {
        update: (store, { data: { newProject } }) => {
          debugger
          const state: ProjectsResponse = store.readQuery({
            query: this.projectsGQL.document,
          })

          const foundProjectIndex = state.projects.findIndex(
            (it) => it.id === projectId
          )
          const newItem = {
            ...newProject,
            order,
          }

          const newState = {
            ...state,
            projects: [
              ...state.projects.slice(0, foundProjectIndex),
              newItem,
              ...state.projects.slice(foundProjectIndex + 1),
            ],
          }

          store.writeQuery({ query: this.projectsGQL.document, data: newState })
        },
      }
    )
  }
}
