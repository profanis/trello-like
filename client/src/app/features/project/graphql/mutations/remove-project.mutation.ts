import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { NewProjectResponse } from 'src/app/models/project.model';



@Injectable({
  providedIn: 'root'
})
export class RemoveProjectGQL extends Mutation<NewProjectResponse, {id: string}> {
  document = gql`
    mutation RemoveProject($id: ID!) {
      removeProject(id: $id) {
        id
      }
    }`;
}
