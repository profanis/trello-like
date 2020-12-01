import {Mutation, gql} from 'apollo-angular';
import { Injectable } from '@angular/core'


import { NewProjectResponse, UpdateProjectSortingInput } from 'src/app/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ChangeProjectOrderGQL extends Mutation<
  NewProjectResponse,
  UpdateProjectSortingInput
> {
  document = gql`
    mutation UpdateProjectSorting($input: UpdateProjectSortingInput) {
      updateProjectSorting(input: $input) {
        id
      }
    }
  `
}
