import {Query, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';


import { ProjectResponse } from 'src/app/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectByIdGQL extends Query<ProjectResponse, {id: string}> {
  document = gql`
    query GetProject($id: ID!){
      project(id: $id) {
        name
        id
        tasks {
          id
          name
          project {
            name
            tasks {
              name
            }
          }
        }
      }
    }`;
}
