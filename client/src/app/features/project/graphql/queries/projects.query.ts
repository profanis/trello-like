import { Injectable } from '@angular/core'
import { Query } from 'apollo-angular'
import gql from 'graphql-tag'
import { ProjectsResponse } from 'src/app/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsGQL extends Query<ProjectsResponse> {
  document = gql`
    query GetProjects {
      projects {
        id
        name
        order
        tasks {
          name
        }
      }
    }
  `
}
