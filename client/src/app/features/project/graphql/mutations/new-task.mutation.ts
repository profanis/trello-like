import { Injectable } from '@angular/core'
import { gql, Mutation } from 'apollo-angular'
import { NewTaskInputVariables } from 'src/app/models/variables/new-task-input.variables'
import { Task } from '../../../../models/task.model'

@Injectable({
  providedIn: 'root',
})
export class NewTaskGQL extends Mutation<
  { newTask: Task },
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
