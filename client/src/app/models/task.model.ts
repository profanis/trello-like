import { Project } from './project.model';

export interface Task {
  id?: string;
  name: string;
  project: Project | string;
}
