import {Mutation, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';


import { NewProjectResponse, NewProjectInputVariables } from 'src/app/models/project.model';


@Injectable({
  providedIn: 'root'
})
export class UpdateProjectGQL extends Mutation<NewProjectResponse, NewProjectInputVariables> {
  document = gql`
    mutation UpdateProject($input: UpdateProjectInput) {
      updateProject(input: $input) {
        id
        name
      }
    }`;
}
