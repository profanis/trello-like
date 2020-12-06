import { Injectable } from '@angular/core'
import { gql, Mutation } from 'apollo-angular'
import { Project } from '../../../../models/project.model'

@Injectable({
  providedIn: 'root',
})
export class UpdateProjectsOrderGQL extends Mutation<
  { updateProjectsOrder: Project[] },
  { input: { id: number; order: number }[] }
> {
  document = gql`
    mutation UpdateProjectsOrder($input: [UpdateProjectOrderInput]) {
      updateProjectsOrder(input: $input) {
        id
        name
      }
    }
  `
}
