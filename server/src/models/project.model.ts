import { Document, model, Schema } from 'mongoose'
import { ITask } from './task.model'

export interface IProject {
  id: string
  name: string
  description: string
  order: number
}

const schema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    order: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
)
// tslint:disable-next-line:variable-name
export const ProjectModel = model<IProject & Document>('Project', schema)
