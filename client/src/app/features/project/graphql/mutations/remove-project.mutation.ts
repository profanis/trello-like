import { Injectable } from '@angular/core'
import { gql, Mutation } from 'apollo-angular'
import { NewProjectResponse } from 'src/app/models/project.model'

@Injectable({
  providedIn: 'root',
})
export class RemoveProjectGQL extends Mutation<
  NewProjectResponse,
  { id: string }
> {
  document = gql`
    mutation RemoveProject($id: ID!) {
      removeProject(id: $id) {
        id
      }
    }
  `
}
