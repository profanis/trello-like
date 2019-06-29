import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
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
