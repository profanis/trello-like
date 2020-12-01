import {Mutation, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';


import { NewProjectResponse, NewProjectInputVariables } from 'src/app/models/project.model';


@Injectable({
  providedIn: 'root'
})
export class NewProjectGQL extends Mutation<NewProjectResponse, NewProjectInputVariables> {
  document = gql`
    mutation NewProject($input: NewProjectInput) {
      newProject(input: $input) {
        id
        name
      }
    }`;
}
