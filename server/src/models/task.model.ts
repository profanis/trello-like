import { Document, model, Schema } from 'mongoose';
import { IProject } from './project.model';

export interface ITask  {
  id: string;
  name: string;
  description: string;
  project: IProject
}

const taskSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    project: { type:Schema.Types.ObjectId, ref: 'Project' }
  },
  {
    timestamps: true,
  },
);
// tslint:disable-next-line:variable-name
export const TaskModel = model<ITask  & Document>('Task', taskSchema);
