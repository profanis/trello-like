import { taskResolvers } from '../../src/api/task/task.resolvers'
import { TaskModel } from '../../src/models/task.model';
import * as mongoose from 'mongoose';
const chai = require('chai');
chai.use(require('chai-http'));
import { clearDb } from '../db'
import { runQuery } from '../run';

describe('Task', () => {

  afterEach(() => {
    return clearDb();
  });
  
  /*
  * Test the Task resolvers 
  */
  describe('resolvers', () => {

    it('should resolve correctly', async () => {
      const projectId = mongoose.Types.ObjectId();

      const query = `
       mutation NewTask($input: NewTaskInput) {
         newTask(input: $input) {
           id 
           name
           description
         }
       } 
      `
      const variables = { 
        input: { 
          name: 'Test task name from mutation',
          description: 'Test task name description'
        }
      }

      const results = await runQuery(query, variables)
      
      console.log(results);

      results
        .should.not.have.property('errors')
      
      results
        .should.have.property('data')
        .that.has.property('newTask')
        .that.has.property('id')
        .that.equals(projectId) 
    })

    it('should resolve one task via query', async () => {
      const projectId = mongoose.Types.ObjectId();
      const taskId = mongoose.Types.ObjectId();
      
      await TaskModel.create({
        _id: taskId,
        name: 'Test task name',
        description: 'Test task description',
        project: projectId
      })

      await TaskModel.create({
        name: 'Test task name2',
        description: 'Test task description',
        project: projectId
      })

      const query = `
       query Task($input: TaskInput!) {
         task(input: $input) {
           id
           name 
         }
       } 
      `
      const variables = { input: { id:  taskId + '' } }

      const results = await runQuery(query, variables)
      
      results
        .should.not.have.property('errors')
      
      results
        .should.have.property('data')
        .that.has.property('task')
    })

    it('should resolve many tasks via query', async () => {
      const projectId = mongoose.Types.ObjectId();
      
      await TaskModel.create({
        name: 'Test task name',
        description: 'Test task description',
        project: projectId
      })

      await TaskModel.create({
        name: 'Test task name2',
        description: 'Test task description',
        project: projectId
      })

      const query = `
       query {
         tasks {
           id
           name 
         }
       } 
      `
      const results = await runQuery(query)
      
      results
        .should.not.have.property('errors')
      
      results
        .should.have.property('data')
        .that.has.property('tasks')
        .that.has.length(2)
    })

  });
});
