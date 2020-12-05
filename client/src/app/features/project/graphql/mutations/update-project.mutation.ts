import { Injectable } from '@angular/core'
import { gql, Mutation } from 'apollo-angular'
import {
  NewProjectInputVariables,
  NewProjectResponse,
} from 'src/app/models/project.model'

@Injectable({
  providedIn: 'root',
})
export class UpdateProjectGQL extends Mutation<
  NewProjectResponse,
  NewProjectInputVariables
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
