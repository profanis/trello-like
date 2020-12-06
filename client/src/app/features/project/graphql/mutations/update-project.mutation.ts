import { Injectable } from '@angular/core'
import { gql, Mutation } from 'apollo-angular'
import { Project } from './../../../../models/project.model'

@Injectable({
  providedIn: 'root',
})
export class UpdateProjectGQL extends Mutation<
  { updateProject: Project },
  { input: Project }
> {
  document = gql`
    mutation UpdateProject($input: UpdateProjectInput) {
      updateProject(input: $input) {
        id
        name
      }
    }
  `
}
