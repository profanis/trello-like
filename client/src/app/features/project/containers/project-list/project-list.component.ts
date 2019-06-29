import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { ProjectListService } from '../../project-list.service'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { ProjectsResponse, Project } from 'src/app/models/project.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [ProjectListService],
})
export class ProjectListComponent implements OnInit {
  data$: Observable<ProjectsResponse>
  project: Project = {}

  constructor(
    private projectListService: ProjectListService
  ) {}

  ngOnInit() {
    this.data$ = this.projectListService.getProducts()
  }

  addProject() {
    this.projectListService.addProject(this.project).pipe(
      tap(() => this.project.name = '')
    ).subscribe()
  }

  removeProject(projectId) {
    this.projectListService.removeProject(projectId).subscribe()
  }

  addTaskInProject(task, project) {
    this.projectListService.addTaskInProject(task, project).subscribe()
  }

  drop(event: CdkDragDrop<string[]>, projects) {
    const project = projects[event.previousIndex]
    console.log(project.name, event.previousIndex, event.currentIndex)
    moveItemInArray(projects, event.previousIndex, event.currentIndex)
    this.projectListService
      .updateProjectSorting(project.id, event.currentIndex)
      .subscribe()
  }
}
