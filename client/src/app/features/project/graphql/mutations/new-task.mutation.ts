import { Injectable } from '@angular/core'
import { gql, Mutation } from 'apollo-angular'
import { NewTaskResponse } from 'src/app/models/project.model'
import { NewTaskInputVariables } from 'src/app/models/variables/new-task-input.variables'

@Injectable({
  providedIn: 'root',
})
export class NewTaskGQL extends Mutation<
  NewTaskResponse,
  NewTaskInputVariables
> {
  document = gql`
    mutation NewTask($input: NewTaskInput) {
      newTask(input: $input) {
        id
        name
      }
    }
  `
}
