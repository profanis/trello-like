import { Injectable } from '@angular/core'
import { gql, Query } from 'apollo-angular'
import { Project } from './../../../../models/project.model'

@Injectable({
  providedIn: 'root',
})
export class ProjectsGQL extends Query<{ projects: Project[] }> {
  document = gql`
    query {
      projects {
        id
        name
        order
        tasks {
          id
          name
        }
      }
    }
  `
}
