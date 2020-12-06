import { Injectable } from '@angular/core'
import { gql, Mutation } from 'apollo-angular'
import { Project } from './../../../../models/project.model'

@Injectable({
  providedIn: 'root',
})
export class NewProjectGQL extends Mutation<
  { newProject: Project },
  { input: Project }
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
