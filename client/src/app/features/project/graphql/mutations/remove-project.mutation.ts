import { Injectable } from '@angular/core'
import { gql, Mutation } from 'apollo-angular'
import { Project } from './../../../../models/project.model'

@Injectable({
  providedIn: 'root',
})
export class RemoveProjectGQL extends Mutation<
  { removeProject: Project },
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
