import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
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
        description
      }
    }`;
}
