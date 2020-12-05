import { Injectable } from '@angular/core'
import { gql, Mutation } from 'apollo-angular'
import {
  NewProjectInputVariables,
  NewProjectResponse,
} from 'src/app/models/project.model'

@Injectable({
  providedIn: 'root',
})
export class NewProjectGQL extends Mutation<
  NewProjectResponse,
  NewProjectInputVariables
> {
  document = gql`
    mutation NewProject($input: NewProjectInput) {
      newProject(input: $input) {
        id
        name
      }
    }
  `
}
