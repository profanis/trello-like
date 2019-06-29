import { Injectable } from '@angular/core'

import { NewProjectGQL } from './graphql/mutations/new-project.mutation'
import { NewTaskGQL } from './graphql/mutations/new-task.mutation'
import { RemoveProjectGQL } from './graphql/mutations/remove-project.mutation'
import { ProjectsGQL } from './graphql/queries/projects.query'
import { map } from 'rxjs/operators'
import { ChangeProjectOrderGQL } from './graphql/mutations/change-project-order.mutation'
import { Project, ProjectsResponse } from 'src/app/models/project.model';

@Injectable()
export class ProjectListService {
  constructor(
    private newProjectGQL: NewProjectGQL,
    private projectsGQL: ProjectsGQL,
    private removeProjectGQL: RemoveProjectGQL,
    private changeProjectOrderGQL: ChangeProjectOrderGQL,
    private newTaskGQL: NewTaskGQL
  ) {}

  // addProject(project: Project) {
  //   return this.newProjectGQL.mutate(
  //     {
  //       input: project,
  //     },
  //     {
  //       refetchQueries: [
  //         {
  //           query: this.projectsGQL.document,
  //         },
  //       ],
  //       errorPolicy: 'ignore',
  //     }
  //   )
  // }


  addProject(project: Project) {
    return this.newProjectGQL.mutate(
      { input: project },
      {
        update: (store, {data: {newProject}}) => {
          // Get the slice of the cache
          const data: ProjectsResponse = store.readQuery({
            query: this.projectsGQL.document,
          })

          // Insert new item in array
          data.projects.push({...newProject, order: 0, tasks: []})

          // Update cache
          store.writeQuery({
            query: this.projectsGQL.document,
            data
          })
        },
      }
    )
  }

  removeProject(projectId) {
    return this.removeProjectGQL.mutate(
      { id: projectId } ,
      {
        update: (store, { data: { removeProject } }) => {
          const data: ProjectsResponse = store.readQuery({
            query: this.projectsGQL.document,
          })
          const projectIndex = data.projects.findIndex(
            (project) => project.id === removeProject.id
          )

          data.projects = [
            ...data.projects.slice(0, projectIndex),
            ...data.projects.slice(projectIndex + 1),
          ]

          store.writeQuery({ query: this.projectsGQL.document, data })
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
          const data: ProjectsResponse = store.readQuery({
            query: this.projectsGQL.document,
          })

          const foundProject = data.projects.find((it) => it.id === project.id)

          foundProject.tasks = foundProject.tasks || []
          foundProject.tasks.push(newTask)

          store.writeQuery({ query: this.projectsGQL.document, data })
        },
      }
    )
  }

  getProducts() {
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
        update: (store, { data: { newTask } }) => {
          const data: ProjectsResponse = store.readQuery({
            query: this.projectsGQL.document,
          })

          const foundProject = data.projects.find((it) => it.id === projectId)
          foundProject.order = order

          store.writeQuery({ query: this.projectsGQL.document, data })
        },
      }
    )
  }
}
