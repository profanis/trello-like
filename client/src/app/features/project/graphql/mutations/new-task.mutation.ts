import {Mutation, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';


import { NewTaskInputVariables } from 'src/app/models/variables/new-task-input.variables';
import { NewTaskResponse } from 'src/app/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class NewTaskGQL extends Mutation<NewTaskResponse, NewTaskInputVariables> {
  document = gql`
    mutation NewTask($input: NewTaskInput) {
      newTask(input: $input) {
        id
        name
      }
    }`;
}
