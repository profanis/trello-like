import { ProjectModel } from '../models/project.model';

export class ProjectService {
  updateProjectSorting(id: number, order: number) {
    return ProjectModel.findByIdAndUpdate(id, { order }, { new: true }).exec()
  }
}
