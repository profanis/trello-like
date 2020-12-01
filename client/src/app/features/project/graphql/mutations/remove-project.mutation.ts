import {Mutation, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';


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
