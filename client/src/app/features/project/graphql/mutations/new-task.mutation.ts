import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { NewTaskInputVariables } from 'src/app/models/variables/new-task-input.variables';
import { NewTaskResponse } from 'src/app/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class NewTaskGQL extends Mutation<NewTaskResponse, NewTaskInputVariables> {
  document = gql`
    mutation NewProject($input: NewTaskInput) {
      newTask(input: $input) {
        id
        name
      }
    }`;
}
