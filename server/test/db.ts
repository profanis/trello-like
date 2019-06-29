import { DemoModel } from '../src/models/demo.model';
import { TaskModel } from '../src/models/task.model';
import { ProjectModel } from '../src/models/project.model';
import { AnimalModel } from '../src/models/animal.model';

export const clearDb = async ()  => {
  await TaskModel.remove({}).exec();
  await ProjectModel.remove({}).exec();
  await DemoModel.remove({}).exec();
  await AnimalModel.remove({}).exec();
}